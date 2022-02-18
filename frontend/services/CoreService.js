import {injectable} from 'inversify'


@injectable()
export default class CoreService {
    
    logMessage() {
        console.log('qqq');
    }
}