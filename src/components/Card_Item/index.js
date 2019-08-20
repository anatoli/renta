import React, {Component} from 'react';

import '../../assets/css/style.scss';
import './style.scss';

class CardItem extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" name="dialog_state" id="dialog_state" class="dialog_state" />
                <div id='dialog'>
                    <label id="dlg-back" for="dialog_state"></label>
                    <div id='dlg-wrap'>
                        <label id="dlg-close" for="dialog_state"><i class="icon ion-ios-close-empty"></i></label>
                         <h2 id='dlg-header'>Are you sure?</h2>
                        <div id='dlg-content'>
                            You are about to kill a puppy, that's some serious shit. Have you really thought this through?
                        </div>
                        <div id='dlg-prompt'>
                            <div class='button positive'>
                                <i class="icon ion-ios-checkmark-empty"/>
                                Yes, let's do it!
                            </div>
                            <div class='button'>
                                <i class="icon ion-ios-close-empty"/>
                                No, I'll reconsider
                            </div>
                        </div>
                    </div>
                </div>
                <main id='main' class='main_area'>
                    <div class='center'>
                        <label class="button" for="dialog_state">
                            <i class="icon ion-ios-upload-outline"/>
                            Open the dialog
                        </label>
                    </div>
                    {/*<div id='console'></div>*/}
                </main>
            </div>
        )
    }
}

export default CardItem
