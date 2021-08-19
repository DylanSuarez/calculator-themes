const d = document;
const w = window;


d.addEventListener('DOMContentLoaded', (e) => {
  const $btnTheme1 = d.getElementById('tema1');
  const $btnTheme2 = d.getElementById('tema2');
  const $btnTheme3 = d.getElementById('tema3');
  const $keys = d.querySelectorAll('.keys');
  const $keysDel = d.getElementById('borrar');
  const $keysReset = d.getElementById('reiniciar');
  const $keysSame = d.getElementById('total');
  const $keypad = d.querySelector('.keypad');
  const $creen = d.querySelector('.creen');
  const $calc = d.querySelector('.calc');
  const $switch = d.querySelector('.switch');


  d.addEventListener('click', (e) => {

    if(e.target.matches("#tema3")) {
      $btnTheme3.setAttribute("fill", "hsl(176, 100%, 44%)");
      $btnTheme3.classList.replace("bi-record", "bi-record-fill");
      $btnTheme3.firstElementChild.setAttribute("d", "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme3.firstElementChild.setAttribute("full-rule", "evenodd");

      $btnTheme1.setAttribute("fill", "currentColor");
      $btnTheme1.classList.replace("bi-record-fill", "bi-record");
      $btnTheme1.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme1.firstElementChild.setAttribute("full-rule", " ");

      $btnTheme2.setAttribute("fill", "currentColor");
      $btnTheme2.classList.replace("bi-record-fill", "bi-record");
      $btnTheme2.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme2.firstElementChild.setAttribute("full-rule", " ");

      d.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
      
      $keys.forEach(el => {
        el.style.backgroundColor = 'hsl(268, 47%, 21%)';
        el.style.boxShadow = 'inset 0 -2px 0 1px hsl(290, 70%, 36%)';
        el.style.color = 'hsl(52, 100%, 62%)';
      });

      $keysDel.style.backgroundColor = 'hsl(281, 89%, 26%)';
      $keysDel.style.boxShadow = 'inset 0 -2px 0 1px hsl(290, 70%, 36%)';
      $keysDel.style.color = '#fff';

      $keysReset.style.backgroundColor = 'hsl(281, 89%, 26%)';
      $keysReset.style.boxShadow = 'inset 0 -2px 0 1px hsl(290, 70%, 36%)';
      $keysReset.style.color = '#fff';

      $keysSame.style.backgroundColor = 'hsl(176, 100%, 44%)';
      $keysSame.style.boxShadow = 'inset 0 -2px 0 1px hsl(177, 92%, 70%)';
      $keysSame.style.color = 'hsl(198, 20%, 13%)';

      $keypad.style.backgroundColor = 'hsl(268, 71%, 12%)';
      $switch.style.backgroundColor = 'hsl(268, 71%, 12%)';
      
      $creen.style.backgroundColor = 'hsl(268, 71%, 12%)';
      $creen.style.color = 'hsl(52, 100%, 62%)';

      $calc.style.backgroundColor = 'hsl(268, 75%, 9%)';
      $calc.style.color = 'hsl(52, 100%, 62%)';
    };

    if(e.target.matches("#tema2")) {
      $btnTheme2.setAttribute("fill", "hsl(25, 98%, 40%)");
      $btnTheme2.classList.replace("bi-record", "bi-record-fill");
      $btnTheme2.firstElementChild.setAttribute("d", "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme2.firstElementChild.setAttribute("full-rule", "evenodd");

      $btnTheme1.setAttribute("fill", "currentColor");
      $btnTheme1.classList.replace("bi-record-fill", "bi-record");
      $btnTheme1.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme1.firstElementChild.setAttribute("full-rule", " ");

      $btnTheme3.setAttribute("fill", "currentColor");
      $btnTheme3.classList.replace("bi-record-fill", "bi-record");
      $btnTheme3.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme3.firstElementChild.setAttribute("full-rule", " ");

      d.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
      
      $keys.forEach(el => {
        el.style.backgroundColor = 'hsl(45, 7%, 89%)';
        el.style.boxShadow = 'inset 0 -2px 0 1px hsl(35, 11%, 61%)';
        el.style.color = 'hsl(60, 10%, 19%)';
      });

      $keysDel.style.backgroundColor = 'hsl(185, 42%, 37%)';
      $keysDel.style.boxShadow = 'inset 0 -2px 0 1px hsl(185, 58%, 25%)';
      $keysDel.style.color = '#fff';

      $keysReset.style.backgroundColor = 'hsl(185, 42%, 37%)';
      $keysReset.style.boxShadow = 'inset 0 -2px 0 1px hsl(185, 58%, 25%)';
      $keysReset.style.color = '#fff';

      $keysSame.style.backgroundColor = 'hsl(25, 98%, 40%)';
      $keysSame.style.boxShadow = 'inset 0 -2px 0 1px hsl(25, 99%, 27%)';
      $keysSame.style.color = '#fff';

      $keypad.style.backgroundColor = 'hsl(0, 5%, 81%)';
      $switch.style.backgroundColor = 'hsl(0, 5%, 81%)';
      
      $creen.style.backgroundColor = 'hsl(0, 0%, 93%)';
      $creen.style.color = 'hsl(60, 10%, 19%)';

      $calc.style.backgroundColor = 'hsl(0, 0%, 90%)';
      $calc.style.color = 'hsl(60, 10%, 19%)';
    };

    if(e.target.matches("#tema1")) {
      $btnTheme1.setAttribute("fill", "hsl(6, 63%, 50%)");
      $btnTheme1.classList.replace("bi-record", "bi-record-fill");
      $btnTheme1.firstElementChild.setAttribute("d", "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme1.firstElementChild.setAttribute("full-rule", "evenodd");

      $btnTheme2.setAttribute("fill", "currentColor");
      $btnTheme2.classList.replace("bi-record-fill", "bi-record");
      $btnTheme2.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme2.firstElementChild.setAttribute("full-rule", " ");

      $btnTheme3.setAttribute("fill", "currentColor");
      $btnTheme3.classList.replace("bi-record-fill", "bi-record");
      $btnTheme3.firstElementChild.setAttribute("d", "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z");
      $btnTheme3.firstElementChild.setAttribute("full-rule", " ");

      d.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
      
      $keys.forEach(el => {
        el.style.backgroundColor = 'hsl(30, 25%, 89%)';
        el.style.boxShadow = 'inset 0 -2px 0 1px hsl(28, 16%, 65%)';
        el.style.color = 'hsl(221, 14%, 31%)';
      });

      $keysDel.style.backgroundColor = 'hsl(225, 21%, 49%)';
      $keysDel.style.boxShadow = 'inset 0 -2px 0 1px hsl(224, 28%, 35%)';
      $keysDel.style.color = '#fff';

      $keysReset.style.backgroundColor = 'hsl(225, 21%, 49%)';
      $keysReset.style.boxShadow = 'inset 0 -2px 0 1px hsl(224, 28%, 35%)';
      $keysReset.style.color = '#fff';

      $keysSame.style.backgroundColor = 'hsl(6, 63%, 50%)';
      $keysSame.style.boxShadow = 'inset 0 -2px 0 1px hsl(6, 70%, 34%)';
      $keysSame.style.color = '#fff';

      $keypad.style.backgroundColor = 'hsl(223, 31%, 20%)';
      $switch.style.backgroundColor = 'hsl(223, 31%, 20%)';
      
      $creen.style.backgroundColor = 'hsl(224, 36%, 15%)';
      $creen.style.color = '#fff';

      $calc.style.backgroundColor = 'hsl(222, 26%, 31%)';
      $calc.style.color = '#fff';
    };

  });
});