import {renderElement} from './components/utils';
import {getMainMenuLayout} from './components/main-menu';
import {getFiltersLayout} from './components/filters';
import {getTasksListLayout} from './components/task-list';

const mainContainer = document.querySelector(`.main`);
const mainMenuContainer = document.querySelector(`.main__control`);

renderElement(mainMenuContainer, getMainMenuLayout());
renderElement(mainContainer, getFiltersLayout());
renderElement(mainContainer, getTasksListLayout());
