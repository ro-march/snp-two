
export const warn = values => {
    const warnings = {}

    return warnings;
}

export let errors = {}

export const validate = values => {
	errors = {}

    if (!values.name) {
        errors.name = 'Заполните поле'
    }

    if (!values.username) {
        errors.username = 'Заполните поле'
    }

    if (!values.count) {
        errors.count = 'Заполните поле'
    } else if (values.count < 1) {
    	errors.count = 'Меньше 1? Серьезно?'
    }

    if (!values.cost) {
        errors.cost = 'Заполните поле'
    } else if (values.cost == 0) {
    	errors.cost = 'За бесплатно продаешь?'
    } else if (values.cost < 0) {
    	errors.cost = 'Это я тебе должен заплаить? Смешно!'
    }

    if (!values.email) {
        errors.email = 'заполните поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неккоректный e-mail'
    }

    return errors;
}