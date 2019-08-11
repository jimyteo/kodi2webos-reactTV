import React from 'react';
import ReactTV from 'react-tv';

import Sidebar from './components/Sidebar';
import List from './components/List';
import Search from './components/Search';
import Details from './components/Details';
import Content from './components/Content';
import MoonLoader from '@bit/davidhu2000.react-spinners.moon-loader';


import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';

import { getMovies } from './rpc/video-library.js';
import { wsp } from './rpc/index.js';
import { generate as uuid } from 'shortid';
import { imageFixURL } from './util';

import debug from './util/debug.js';

const logger = debug('App');
logger('Iniciou App');

class Collection {
  constructor() {
    this.title = null;
    this.itens = [];
    this.msgID = uuid();
    this.request = null;
    this.response = null;
  }
}

class ReactTVApp extends React.Component {
  constructor() {
    super();

    this.state = {
      active: null,
      data: [],
      loading: true
    }

    this.collections = [];
  }

  async componentDidMount() {
    try {

      setInterval(function(){ logger('carregando'); }, 5000);

      await wsp.open(); //aguardar a conexao abrir

      /** coleção Continuar Assitindo */
      let collContinue = new Collection();
      collContinue.title = "Continuar assistindo";
      collContinue.request = getMovies(0, 5);
      collContinue.response = await wsp.sendRequest(collContinue.request, { requestId: collContinue.msgID }); //apos conexao aberta, enviar requisição
      logger("mensagem recebida: " + collContinue.response.id);

      //corrigir o encoded das URLs de imagens
      if (collContinue.response && collContinue.response.result && collContinue.response.result.movies.length > 0) {
        collContinue.response.result.movies.forEach(imageFixURL);
        collContinue.itens = collContinue.response.result.movies;
        this.collections.push(collContinue);
      }

      /** coleção Adiconados recentemente */
      let collRecents = new Collection();
      collRecents.title = "Adicionados recentemente";
      collRecents.request = getMovies(5, 10);
      collRecents.response = await wsp.sendRequest(collRecents.request, { requestId: collRecents.msgID }); //apos conexao aberta, enviar requisição
      logger("mensagem recebida: " + collRecents.response.id);

      //corrigir o encoded das URLs de imagens
      if (collRecents.response && collRecents.response.result && collRecents.response.result.movies.length > 0) {
        collRecents.response.result.movies.forEach(imageFixURL);
        collRecents.itens = collRecents.response.result.movies;
        this.collections.push(collRecents);
      }

      /** coleção Ação */
      let collAction = new Collection();
      collAction.title = "Ação";
      collAction.request = getMovies(10, 15);
      collAction.response = await wsp.sendRequest(collAction.request, { requestId: collAction.msgID }); //apos conexao aberta, enviar requisição
      logger("mensagem recebida: " + collAction.response.id);

      //corrigir o encoded das URLs de imagens
      if (collAction.response && collAction.response.result && collAction.response.result.movies.length > 0) {
        collAction.response.result.movies.forEach(imageFixURL);
        collAction.itens = collAction.response.result.movies;
        this.collections.push(collAction);
      }

      /** IMPORTANTE  */
      this.setState({ loading: false }); //força a re-renderização

    } catch (error) {
      logger(error);
    }

  }

  changeFocusTo(index) {
    this.setState({ active: index });
  }

  onBlurLists() {
    this.setState({ active: null });
  }

  render() {
    const loading = this.state.loading;

    logger("render ");
    if (loading === false) {
      logger(this.collections[0].itens[0]);
    }


    return (
      <Navigation>
        {loading ?
          (<div id='loading' class='centered'>
            <MoonLoader color='#E50914' size={100} />
            <div><p>...Carregando...</p></div>
          </div>) : (
            <div id="container">
              <HorizontalList>
                <Sidebar />
                <div class="mainbox">
                  <VerticalList navDefault>
                    <Search />
                    <div>
                      <VerticalList id="content" onBlur={() => this.onBlurLists()}>

                        {this.collections.map((collection, i) =>
                          <List key={i} data={collection.itens} title={collection.title} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true} />
                        )}
                      </VerticalList>
                    </div>
                  </VerticalList>
                </div>
              </HorizontalList>
            </div>)}
      </Navigation>
    );
  }
}

ReactTV.render(<ReactTVApp />, document.querySelector('#root'));

/*
<Navigation>
        <div id="container">
          <HorizontalList>
            <Sidebar />
            <div class="mainbox">
              <VerticalList navDefault>
                <Search />
                {loading ?
                  (<div id='loading' />) : (
                    <div>
                      <VerticalList id="content" onBlur={() => this.onBlurLists()}>
                        <Content movie={this.collections[0].itens[0]} />
                        {this.collections.map((collection, i) =>
                          <List key={i} data={collection.itens} title={collection.title} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true} />
                        )}
                      </VerticalList>
                    </div>
                  )}
              </VerticalList>
            </div>
          </HorizontalList>
        </div>
      </Navigation>


*/