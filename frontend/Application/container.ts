import { Container, Events, StateSerializer } from 'nuxt-ioc';
import MyService from './Domain/MyService';

const container = new Container();
container.bindInstance(Container, container);

container.bind(MyService); // here we register our sample service

// System dependencies
container.bind(Events);
container.bind(StateSerializer);

export default container;