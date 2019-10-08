// d-flex justify-center align-center 
<template>
    <v-container fluid class="pa-5 home-hero">
        <v-row>
            <v-col
                class="d-flex justify-center display-4 font-weight-medium white--text"
            >HEALTHY MEALS</v-col>
        </v-row>
        <v-row>
            <v-col
                class="d-flex justify-center display-4 font-weight-medium white--text"
            >FOR YOUR TABLE</v-col>
        </v-row>
        <v-row>
            <v-col
                class="d-flex justify-center font-weight-bold white--text"
            >Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door</v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-btn fab class="mt-5 brown ligthen-4">
                <v-icon large color="white">mdi-arrow-down-bold</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>