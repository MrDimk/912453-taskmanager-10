import {getCardLayout, getCardEditLayout} from './card';
import {getLoadMoreBtnLayout} from './button';

const getTasksListLayout = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>

  <div class="board__tasks">
    ${getCardEditLayout()}
    ${getCardLayout()}
    ${getCardLayout()}
    ${getCardLayout()}
  </div>
  ${getLoadMoreBtnLayout()}
</section>
`;

export {getTasksListLayout};
