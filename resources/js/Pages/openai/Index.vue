

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                OpenAI
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg dark:text-white p-4">
                    <h1 class="text-xl mb-4">Hallo das isch openai!</h1>
                    
                    <p v-for="item in conversation" :key="item" :class="{'italic': item.person === 'ai'}">{{ item.text }}</p>
                    <div class="flex">
                        <template v-if="inputText.length < 1">
                            <div class="inline cursor-blinking w-[1px] h-5 bg-white"></div>
                        </template>
                        <input class="bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none flex-grow" v-model="inputText" v-on:keyup.enter="ask" @keyup.up="histroyUp" @keyup.down="histroyDown" :class="{'caret-transparent': inputText.length < 1}">
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<style scoped>
.cursor-blinking{
    animation: blink 1s infinite;
}
@keyframes blink{
    0%{
        opacity: 0;
    }
    40%{
        opacity: 1;
    }
    60%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import axios from 'axios'

export default{
    data(){
        return{
            conversation: [],
            inputText: '',
            history: [],
            histroyIndex: 0
        }
    },
    methods: {
        async ask(){
            console.log(this.inputText.length)
            if(this.inputText.length > 4) {
                const question = this.inputText
                this.histroyIndex = 0
                this.history.unshift(question)
                this.conversation.push({text: this.inputText, person: 'me'})
                this.inputText = ''
                axios.get(route('openaitest', {input: question}) ).then(response =>{
                    console.log(response.data)
                    this.conversation.push({text: response.data.dataFromApi, person: 'ai'})
                })
                console.log(this.history)
            }
        },
        // VERY BUGGY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        histroyUp(){
            if(this.histroyIndex < this.history.length){
                this.inputText = this.history[this.histroyIndex]
                this.histroyIndex++
            }
            console.log(this.histroyIndex)
            
        },
        histroyDown(){
            if(this.histroyIndex >= 1){
                this.inputText = this.history[this.histroyIndex]
                this.histroyIndex--
            } else{
                this.inputText = ''
                this.histroyIndex = 0
            }
            console.log(this.histroyIndex)
            
        }
    },
    components: {
        AppLayout,
        Welcome,
        Link
    }
}

</script>