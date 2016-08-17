/**
 * Created by rtholmes on 2016-06-19.
 */

import Log from './Util';
import Server from './rest/Server';

export class App {

    initServer(port: number) {
        Log.info('App::initServer( ' + port + ' ) - start');
        let s = new Server(port);
        s.start();
    }
}

Log.info('App - starting');
let app = new App();
app.initServer(4321);
