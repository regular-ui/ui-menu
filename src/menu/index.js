import { ListView } from 'rgui-ui-listview';
import { Overlay } from 'rgui-ui-overlay';
import template from './index.rgl';

/**
 * @class Menu
 * @extends ListView
 * @param {Object}                  options.data                     =  绑定属性
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Menu = ListView.extend({
    name: 'menu',
    template,
    /**
     * @protected
     * @override
     */
    watch() {/* clear watchers */},
    /**
     * @method select(item) 选择某一项
     * @protected
     * @override
     * @param  {Item} item 选择项
     * @return {void}
     */
    select(item) {
        if (this.$outer && this.$outer.$outer instanceof Overlay)
            this.$outer.$outer.toggle(false);
    },
});

export default Menu;
