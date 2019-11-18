import {fromEvent} from 'rxjs';

//Eventos del dom


const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const obs = {
    next: val => console.log('next: ', val)
}

src1$.subscribe(({x, y}) => {
    console.log('hhh', x, y)
});
src2$.subscribe(val => console.log('jjj', val.key));





