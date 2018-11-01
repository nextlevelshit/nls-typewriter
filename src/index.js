/**
 *Copyright 2018 Michael Czechowski 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.requestAnimFrame 
  = (function(){
    return  window.requestAnimationFrame
      || 
      window.webkitRequestAnimationFrame
      || 
      window.mozRequestAnimationFrame
      || 
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();

var DELAY = 50;
var HANDICAP = 0;

var paragraphElement = document
  .querySelector('body > main > article > p')

var br = document
  .createElement('br');

paragraphElement
  .innerHTML
    .split('')
    .map((letter, i) => {
      HANDICAP
        = (letter === " ") 
          ? HANDICAP - DELAY
            : HANDICAP;

      var span = document
        .createElement('span');

      var spacer
        = (letter === '\n')
          ? br
            : span;

      span.innerHTML = letter;

      setTimeout(() => {
        paragraphElement
          .innerHTML
            = paragraphElement
              .innerHTML
                .slice(1);

        paragraphElement
          .before(spacer);
        
        window.requestAnimFrame(() => {
          span.className = 'show';
        });
        
      }, DELAY * i + HANDICAP, span);
    });



