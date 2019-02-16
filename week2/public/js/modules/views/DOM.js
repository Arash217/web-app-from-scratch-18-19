import utils from "../utils";

const dom = {
    render(page, data) {
        displayPage(page.id);
        page.data = {...page.data, ...data};
        utils.renderTemplate(data, page.templateId, page.contentId);
        initEventListeners(page);
    }
};