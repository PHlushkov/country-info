import { createApp } from 'vue';

import App from '~/app/App.vue';
import { router } from '~/app/router';
import '~/app/style/index.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
