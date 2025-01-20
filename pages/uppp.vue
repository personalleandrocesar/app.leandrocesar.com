<template>
    <div>
        <input type="file" @change="onFileChange" />
        <button @click="uploadFile">Enviar</button>
        <div v-if="uploadedFileUrl">
            Arquivo enviado: <a :href="uploadedFileUrl" target="_blank">{{ uploadedFileUrl }}</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const file = ref(null);
const uploadedFileUrl = ref(null);

const onFileChange = (event) => {
    file.value = event.target.files[0];
};

const uploadFile = async () => {
    if (!file.value) {
        alert('Selecione um arquivo antes de enviar.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file.value);

    try {
        const response = await fetch('https://api.leandrocesar.com/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        uploadedFileUrl.value = data.filePath;
    } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
    }
};
</script>
