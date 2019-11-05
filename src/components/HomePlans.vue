<template>
    <v-container>
        <v-row>
            <v-col xs12 class="text-center display-1 font-weight-black my-5">Available Meal Plans</v-col>
        </v-row>
        <v-row>
            <v-col xs="12" sm="12" md="4">
                <v-card>
                    <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
                        <v-container>
                            <v-row>
                                <v-col xs12 align-end>
                                    <span class="headline white--text">KETO</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <h3 class="headline mb-0">Keto</h3>
                    </v-card-title>
                    <v-card-text>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col xs="12" sm="12" md="4">
                <v-card>
                    <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
                        <v-container>
                            <v-row>
                                <v-col xs12 align-end>
                                    <span class="headline white--text">PALEO</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <h3 class="headline mb-0">Paleo</h3>
                    </v-card-title>
                    <v-card-text>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col xs="12" sm="12" md="4">
                <v-card>
                    <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
                        <v-container>
                            <v-row>
                                <v-col xs12 align-end>
                                    <span class="headline white--text">VEGAN</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <h3 class="headline mb-0">Vegan</h3>
                    </v-card-title>
                    <v-card-text>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans'
};
</script>