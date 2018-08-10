import * as React from "react";
import "./App.css";
import logo from "./logo.svg";
import { funParabola } from "./util/animated";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="target" className="target" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ol>
          <li className="ball">2</li>
          <li className="ball" data-id={0} onClick={this.run}>
            1222
          </li>
          <li className="ball" onClick={this.run}>12</li>
          <li className="ball" onClick={this.run}>13</li>
          <li className="ball" onClick={this.run}>15</li>
          <li className="ball" onClick={this.run}>16</li>
          <li className="ball" onClick={this.run}>17</li>
          <li className="ball" onClick={this.run}>18</li>
          <li className="ball" onClick={this.run}>19</li>
          <li className="ball" onClick={this.run}>199</li>
        </ol>
      </div>
    );
  }

  private run = (e: React.MouseEvent<HTMLElement>) => {
    const imgElement = e.target as HTMLElement;
    const cloneEl = (imgElement.parentNode || window.document.body ).appendChild(imgElement.cloneNode());
    // 终点位置元素
    const shopCartElement = document.querySelector("#target");

    // 初始化抛物线动画
    funParabola(cloneEl, shopCartElement, {
      speed: 100, // 每帧移动的像素大小
      // tslint:disable-next-line:object-literal-sort-keys
      curvature: 0.005, // 实际指焦点到准线的距离
      complete() {
        (cloneEl.parentNode || window.document.body) .removeChild(cloneEl);
      }
    }).position().move();
  };
}

export default App;
