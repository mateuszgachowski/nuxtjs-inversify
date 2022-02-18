import "reflect-metadata";
import { Container } from "inversify";
import { SYMBOLS } from "../inversify/symbols";
import CoreService from "../services/CoreService";

export default () => {
  const container = new Container();

  container.bind(SYMBOLS.CoreService).to(CoreService).inSingletonScope();
};
