/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */

var hulk = {};

/**
 * @method select
 * Функция, с которой начинается манипуляция dom-объектов.
 * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
 * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
	* @param {String} selector css-селектор.
 */

this.select = function(selector) {
	this.element = document.querySelectorAll(selector);
    return this;
};

/**
 * @method addClass
 * Добавляет классы каждому элементу выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

this.addClass = function(clsNames) {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].className += " " + clsNames;
	}
};

/**
 * @method append
 * Добавляет дочерний html-элемент каждому элементу выборки.
 * @param {String} Имя тега, добавляемого элемента.
 */

this.append = function(tagName) {
	for (var i = 0; i < this.element.length; i++) {
    	    this.element[i].appendChild(document.createElement(tagName));
        }
};

/**
 * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
 * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
 * @param {String} attrName Имя атрибута.
 * @param {Number/String} [value] Значение атрибута.
 */
this.attr = function(attrName, value) {
	
};

/**
 * @method children
 * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
 */
this.children = function() {
	return this.element[0].querySelectorAll('*');
};

/**
 * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
 * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
 * @param {String} cssAttrName Имя css-атрибута.
 * @param {Number/String} value Значение css-атрибута.
 */

this.css = function(cssAttrName,value) {

};

/**
 * @method empty
 * Очищает все внутреннее содержимое элементов из выборки.
 */

this.empty = function() {
	for (var i = 0; i < this.element.length; i++) {
		 this.element[i].innerHTML = '';
	}
};

/**
 * @method find
 * Производит выборку по дочерним элементам выборки, удовлетворяющим переданному селектору.
 * @param {String} selector css-селектор для выборки.
 */

this.find = function(selector) {
	var array = [];
	for (var i = 0; i < this.element.length; i++) {
		var mass = this.element[i].querySelectorAll(selector);
		for (var j = 0; j < mass.length; j++) {
			array.push(mass[j]);
		}
	}
	return array;
};

/**
 * @method hasClass
 * Проверяет наличие класса для элементов выборки.
 * @param {String} className Имя класса, наличие которого проверяется.
 * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
 */

this.hasClass = function(className) {
	for (var i = 0; i < this.element.length; i++) {
		if (className !== this.element[i].className) {
			return false;
		}
		return true;
	}
};

/**
 * @method html
 * Возвращает html-содержимое первого элемента выборки.
 * @return {HTMLElement} html-содержимое первого элемента из выборки.
 */

this.html = function() {
	return this.element[0].innerHTML;
};

/**
 * @method on
 * Добавляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, на которое будет производиться подписка.
 * @param {Function} func Функция-подписчик.
 */

this.on = function(eventName,func) {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].addEventListener(eventName,func);
	}
};

/**
 * @method parent
 * Возвращает родительский элемент первого элемента выборки.
 */

this.parent = function() {
	return this.element[0].parentNode;
};

/**
 * @method remove
 * Удаляет из документа все DOM-элементы выборки.
 */

this.remove = function() {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].remove();
	}
};

/**
 * @method removeAttr
 * Удаляет атрибут из элементов выборки.
 * @param {String} attrName Удаляемый атрибут.
 */

this.removeAttr = function(attrName) {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].removeAttribute(attrName);
	}
};

/**
 * @method removeClass
 * Удаляет css-классы для элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

this.removeClass = function(clsNames) {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].removeAttribute("class");
	}
};

/**
 * @method toggleClass
 * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

this.toggleClass = function(clsNames) {
	for (var i = 0; i < this.element.length; i++) {
		if(this.element[i].className.indexOf(clsNames) < 0) {
			this.element[i].className += " " + clsNames;
		}
		else {
			this.element[i].className = this.element[i].removeAttribute(clsNames);
		}
	}
};

/**
 * @method unbind
 * Удаляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
 * @param {Function} func Удаляемая функция-подписчик.
 */

this.unbind = function(eventName,func) {
	for (var i = 0; i < this.element.length; i++) {
		this.element[i].removeEventListener(eventName,func);
	}
};

/**
 * @method wrap
 * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
 * @param {String} tagName Имя тега.
 */

 this.wrap = function(tagName) {
 	for (var i = 0; i < this.element.length; i++) {
		var tag = document.createElement(tagName);
		tag.appendChild(this.element[i]);
		this.element[i].parentNode.appendChild(tag);
	}
 };