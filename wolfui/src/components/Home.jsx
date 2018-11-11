import React from 'react';
import App from './App'
import Intro from './Intro'
import About from './About'
class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
                  <header class="mdl-layout__header">
                     <div class="mdl-layout__header-row">
                          <span class="mdl-layout-title">EduMan</span>
                     </div>

                    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                       <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Home</a>
                       <a href="#fixed-tab-2" class="mdl-layout__tab">Explore</a>
                        <a href="#fixed-tab-3" class="mdl-layout__tab">About</a>
                    </div>
                  </header>
                       
                  <main class="mdl-layout__content">
                          <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                              <div class="page-content"><Intro/> </div>
                          </section>
                        <section class="mdl-layout__tab-panel" id="fixed-tab-2">
                          <div class="page-content"> <App/></div>
                        </section>
                       <section class="mdl-layout__tab-panel" id="fixed-tab-3">
                           <div class="page-content"><About/></div>
                      </section>
                  </main>
            </div>
            </div>
        );
    }
}



export default Home;
