import DOM from './DOM.js';
import * as apiProxy from "../api-proxy.js";

class Details extends DOM {

    constructor() {
        super();

        this.id = '#details-page';
        this.contentId = '#details-page-content';

        DOM.registerPage(this.id);
    }

    template() {
        return `
            <div class="details-container">
                <h1 class="country-title">{{country.name}}</h1>
                <img src="{{country.flag}}" class="country-flag">
                <table class="country-details">
                    <tr>
                        <td class="detail-label">Capital</td>
                        <td>{{country.capital}}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">Region</td>
                        <td>{{country.region}}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">Subregion</td>
                        <td>{{country.subregion}}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">Lat/long</td>
                        <td>
                            <a class="location-url"
                               target="_blank"
                               href="https://google.com/maps/@?api=1&map_action=map&zoom=6&basemap=satellite&center={{country.latlng}}">
                                {{country.latlng}}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="detail-label">Timezones</td>
                        <td>
                            {{#each country.timezones}}
                            <div>
                                <span>{{this}}</span>
                            </div>
                            {{/each}}
                        </td>
                    </tr>
                    <tr>
                        <td class="detail-label">Currencies</td>
                        <td>
                            {{#each country.currencies}}
                            <div>
                                <span>{{this.name}} ({{this.symbol}})</span>
                            </div>
                            {{/each}}
                        </td>
                    </tr>
                    <tr>
                        <td class="detail-label">Languages</td>
                        <td>
                            {{#each country.languages}}
                            <div>
                                <span>{{this.name}}</span>
                            </div>
                            {{/each}}
                        </td>
                    </tr>
                </table>
            </div>
        `;
    }

    async shown(code) {
        try {
            const country = await apiProxy.get(code);
            this.render({country});
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Details();