<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="title my-3">My Recipe</h1>
                <div v-for="(item, index) in userRecipes" :key="index" class="subtitle mb-2">
                    {{item}}
                    <v-btn small outlined color="primary" to="/menu">Goto Menu</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'About',
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    }
};
</script>

<style scoped>
</style>