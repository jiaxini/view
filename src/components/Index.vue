<template>
    <div>
        <p>
            hello, world!
        </p>
        <div>
            <br />
            <hr /> 
            <input type="button" value="start" @click="start" />
            <input type="button" value="stop" @click="stop" />
            <h1 v-text="msg">{{ msg }}</h1>
            <br />
            <hr /> 
            <div class="inner" @click="innerClick">
                <input type="button" value="click" @click.stop="btnClick" />
                <br />
                <a href="http://www.baidu.com" @click.prevent.once="linkClick">goto</a>
            </div> 
            <br />
            <hr /> 
            <div>
                <input type="text"  v-model="n1" />
                <select v-model="opt">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="text"  v-model="n2" />
                <input type="input"  value="=" @click="clac" />
                <input type="text" v-model="result">
            </div>
            <br><hr><br>
            <input type="input" v-model='listName'>
            <input type="button" value="add" @click="add">
            <transition-group appear tag="ul">
                <li v-for="item in list" :key='item.id'>
                    {{item.id}}-----{{item.name}}
                    <input type="button" value="del" @click="del(item.id)">  
                </li>
            </transition-group> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'Index',
    data(){
        return {
            intervalId: null,
            msg: '猥琐发育~别浪！！稳住我们能赢！！！',
            n1: 0,
            n2: 0,
            opt: "+",
            result: 0,
            list:[
                {id:1,name:'jim1'},
                {id:2,name:'jim2'},
                {id:3,name:'jim3'},
                {id:4,name:'jim4'}
            ],
            listName:'',
            listId: 5
        }
    },
    methods: {
        start(){
            if(this.intervalId) return;
            this.stop();
            this.intervalId = setInterval(() => {
                this.msg=this.msg.substring(1)+this.msg.substring(0,1);
            },400);
        },
        stop(){
            if(this.intervalId){
                clearInterval(this.intervalId);
                this.intervalId = null;
            }    
        },
        innerClick(){
            console.log("inner click");
        },
        btnClick(){
            console.log('button click');
        },
        linkClick(){
            console.log('a click');
        },
        clac(){
            switch(this.opt){
                case "+":
                    this.result = parseFloat(this.n1) + parseFloat(this.n2);
                    break;
                case "-":
                    this.result = parseFloat(this.n1) - parseFloat(this.n2);
                    break;
                case "*":
                    this.result = parseFloat(this.n1) * parseFloat(this.n2);
                    break;
                case "/":
                    this.result = parseFloat(this.n1) / parseFloat(this.n2);
                    break;


            }
        },
        add(){this.list.push( {id: this.listId++,name: this.listName})},
        del(id){this.list = this.list.filter(item => item.id != id)}
    }
}
</script>
<style scoped>
p {
    color: blue;
}

.inner {
    background: green;
}

li {
    border: 1px dashed black;
    margin: 5px;
    line-height: 35px;
    width: 100%;
    list-style: none;
}

li:hover{
    background: pink;
    transition: all 0.6s ease;
}
.v-enter, .v-leave-to {
    opacity: 0;
    transform: translateY(80px);
}
.v-enter-active,.v-leave-active {
    transition: all 0.6s ease;
}
.v-move {
    transition: all 0.6s ease;
}
.v-leave-active {
    position: absolute;
}
</style>