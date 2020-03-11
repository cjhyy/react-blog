import React from 'react';
import RouterView from './router/RouterView'



function routerBeforeEnterHook(path: string) {
  // 滚动条复位，回到原点
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // 取消所有请求
  if (window.cancalXHRList){
    window.cancalXHRList.forEach((source: CancelTokenSource) => {
      source.cancel("cancel xhr");
    });
  }

}


function App() {
  return (

      <div className="App">
        <RouterView beforeEnter={routerBeforeEnterHook} />
      </div>

  );
}

export default App;
