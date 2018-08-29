(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

export class Repository {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getAll() {
        return axios.get(this.endpoint);
    }

    findById(id) {
        return axios.get(`${this.endpoint}/${id}`);
    }

    destroy(id) {
        return axios.delete(`${this.endpoint}/${id}`);
    }

    create(newEntity) {
        delete newEntity.id;
        return axios.post(this.endpoint, newEntity);
    }

    update(id, values) {
        delete values.id;

        return axios.put(`${this.endpoint}/${id}`, values);
    }
}