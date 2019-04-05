export default {
    query: '',
    bind: (el, binding, vnode) => {
        let selectedLabelVDom = vnode.child // selectedLabel 属性所在组件
        let queryInputDom = el.querySelector('.el-input__inner') // 获取你输入项的DOM
        if(queryInputDom) {
            queryInputDom.oninput = e => {
                this.query = queryInputDom.value // 每次输入时都将输入缓存下来，当失去焦点时会用到
            }

            queryInputDom.onblur = e => {
                if(!this.query){
                    return
                }

                selectedLabelVDom.$emit('input', this.query)
                this.query = ''
            }
        }
    }
}