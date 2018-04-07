/**
 * onClickOut - Identifica o clique fora do elemento $element
 *
 * @example
 *   function fora() {
 *     console.log('clicou fora');
 *   }
 *   function dentro() {
 *     console.log('clicou dentro');
 *   }
 *   onClickOut($('.quick-setup-container'), $('.overlay'), fora, dentro, true, true);
 *
 * @param  {object} $element              elemento para verificar se o clique foi fora dele
 * @param  {object|null} $removeElement   elemento a ser removido
 * @param  {function|null} functionTrue   funcao excutada quando o clique for fora do elemento
 * @param  {function|null} functionFalse  funcao excutada quando o clique for dentro do elemento
 * @param  {boolean} destroyEvent         parar de executar a funcao apos o primeiro click fora
 * @param  {boolean} preventDefault       quando o clique for fora, prevenir a acao padrao do elemento
 */
 function onClickOut($element, $removeElement, functionTrue, functionFalse, destroyEvent, preventDefault) {
   var onTouchOut = function(e) {
     if ($element.find(e.target).length == 0 && $element[0] != $(e.target)[0]) {
       if (typeof preventDefault == 'undefined' || preventDefault == null || preventDefault == true) {
         e.preventDefault();
       }
       if (typeof functionTrue != 'undefined' && functionTrue != null) {
         functionTrue();
       }
       if (typeof $removeElement != 'undefined' && $removeElement != null) {
         $removeElement.remove();
       }
       if (typeof destroyEvent == 'undefined' || destroyEvent == null || destroyEvent == true) {
         document.body.removeEventListener('touchstart', onTouchOut, true);
         document.body.removeEventListener('click', onTouchOut, true);
       }
     } else {
       if (typeof functionFalse != 'undefined' && functionFalse != null) {
         functionFalse();
       }
     }
   }
   document.body.addEventListener('touchstart', onTouchOut, true);
   document.body.addEventListener('click', onTouchOut, true);
 }
