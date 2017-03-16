

export const warn = values => {
    const warnings = {}
    return warnings;
}

 //*** errors for export ***//
export let errors = {}


export const validate = values => {

     //*** clear errors ***//
	errors = {}

    //*** name product ***//
    if (!values.name) {
        errors.name = 'Введите имя товара'
    } else if (values.name.length > 30) {
        errors.name = "Слишком длинное название!"
    }

     //*** name user ***//
    if (!values.username) {
        errors.username = 'Ваше имя Сер...'
    }

     //*** count product ***//
    if (!values.count) {
        errors.count = 'Введите количество товара'
    } else if (values.count < 1) {
    	errors.count = 'Меньше 1? Серьезно?'
    }

     //*** cost product ***//
    if (!values.cost) {
        errors.cost = 'Введите стоимость товара'
    } else if (values.cost == 0) {
    	errors.cost = 'За бесплатно продаешь?'
    } else if (values.cost < 0) {
    	errors.cost = 'Это я тебе должен заплаить? Смешно!'
    }

     //*** user email ***//
    if (!values.email) {
        errors.email = 'Введите e-mail чтобы мы вам выслали счет'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неккоректный e-mail'
    }

    return errors;
}