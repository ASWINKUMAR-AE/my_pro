<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>
<template >
  <WelcomeItem class="tit" style="">
    <template #icon   class="icon-hover">
      <DocumentationIcon
   
      
      />
    </template>
    <template #heading>Buy a drawing image</template>

    Browse through our collection of drawing images and purchase the perfect image for your artwork.
  </WelcomeItem>

  <WelcomeItem class="tit">
    <template #icon   class="icon-hover">
      <ToolingIcon
  
   
      />
    </template>
    <template #heading>Order a drawing picture</template>

    Order a unique drawing picture and have it delivered to your doorstep.
  </WelcomeItem>

  <WelcomeItem class="tit">
    <template #icon   class="icon-hover">
      <CommunityIcon

      
      />
    </template>
    <template #heading>Give feedback</template>

    Give us your feedback on your experience with our website. Your feedback helps us improve our website.
  </WelcomeItem>

  <WelcomeItem class="tit">
    <template #icon   class="icon-hover">
      <EcosystemIcon
  
      
      />
    </template>
    <template #heading>Apply for the artist</template>

    Want to become an artist and sell your own drawing work? Apply now.
  </WelcomeItem>

  <WelcomeItem class="tit">
    <template #icon   class="icon-hover">
      <SupportIcon
  
      
      />
    </template>
    <template #heading>Upload your own drawing work</template>

    Upload your own drawing work and make it available for purchase.
  </WelcomeItem>
</template>

<style>
.tit{
  border-left: 1px solid orange; border-radius: 0px 50px 50px 0px;
  transition:all 1s;
}
.tit:hover{
  background-color:#36363696;
}
.icon-hover{
  transition:all 1s;
}
.icon-hover:hover{
  transform:rotate(360deg);
}

</style>