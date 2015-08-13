//ambient declaration of RSVP library
declare var RSVP: any;

module sampleTsModule {
    /**
    * async version of confirm dialog in the browser
    */
    export function getConfirmAsync(message: string): Promise<boolean> {
        var promise = new RSVP.Promise(function (resolve: (value: boolean) => void, reject: (reason: boolean) => void) {
            let res: boolean = confirm(message);

            resolve(res);
        });

        return promise;
    }

    /**
    * generic async version of get JSON AJAX call
    */
    export function getJSONAsync(url: string): Promise<string> {
        var promise = new RSVP.Promise(function (resolve: (value: string) => void, reject: (reason: any) => void) {
            var client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        if (this.response) { //latest browsers
                            resolve(this.response);
                        } else if (this.responseText) { //IE9
                            resolve(this.responseText);
                        }
                    }
                    else {
                        reject(this);
                    }
                }
            };
        });

        return promise;
    }

    /**
    * calling our json file
    */
    export async function callAsynGetJSON(): Promise<void> {
        let jsonRes: string = await getJSONAsync("/data/someData.json");

        if (jsonRes) {
            alert("data from server : " + jsonRes)
        }
    }

    /**
    * demo function with many awaits
    */
    export async function getJSONAsyncAfterConfirm(): Promise<void> {
        if (await getConfirmAsync("yes or no?")) {

            if (await getConfirmAsync("really?")) {

                if (await getConfirmAsync("really really?")) {
                    alert('please wait, data loading');

                    await callAsynGetJSON();
                } else {
                    alert('exiting....');
                }
            } else {
                alert('ok then');
            }
        } else {
            alert('dawww');
        }
    }
}