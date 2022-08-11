# Assets

-   [Figma PetApp](https://www.figma.com/file/n5SZZqQv4MOwD0W4CnSoMz/PetApp?node-id=0%3A1)

# Deployment

-   Tencent OSS
    -   [production Tencent OSS](https://shop-1310500802.cos-website.ap-chengdu.myqcloud.com/#/)
    -   [develop Tencent OSS](https://dev-shop-1310500802.cos-website.ap-chengdu.myqcloud.com/#/)
-   Vercel:
    -   [production](https://uni-shop.vercel.app)

# Advice

**Separation of focus writing**

```html
<!-- OK -->
<style lang="scss">
	/* ... */
</style>

<!-- OK -->
<!-- referenced only when the component is loaded -->
<style lang="scss">
	@import "xxx.scss";
</style>

<!-- Discretion -->
<!-- 
    it will be compiled into one file public/css/app.css and u can import that file in head section of your template
    
    <link href="/css/app.css" rel="stylesheet">
 -->
<style lang="scss" src="xxx.scss"></style>
```
