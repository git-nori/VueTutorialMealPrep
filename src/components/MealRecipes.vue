<template>
    <v-container>
        <v-row>
            <v-col xs="12" sm="6" md="6" lg="4" v-for="(item, index) in recipes" :key="index">
                <v-card>
                    <v-img :src="item.recipe.image" height="300px"></v-img>
                    <v-card-title>{{ item.recipe.label }}</v-card-title>
                    <v-card-text>
                        <div class="subtitle-1">Ingredients</div>
                        <ul>
                            <li
                                v-for="(ingredient, i) in item.recipe.ingredientLines"
                                :key="i"
                            >{{ ingredient }}</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green" dark>Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'MealRecipes',
    computed: {
        ...mapGetters(['recipes'])
    }
};
</script>