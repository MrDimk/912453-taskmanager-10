import {getCardLayout, getCardEditLayout} from './cards';

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

const getLoadMoreBtnLayout = () => `
<button class="load-more" type="button">load more</button>
`;

export {getTasksListLayout};
