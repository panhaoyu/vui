# 关于Vui

Vui是一个基于Vue的移动端的前端组件库。

# 造轮子的动机

首先，是想折腾。

其次，现有的轮子确实不太合我的心意。

不如重新造轮子喽。

个人项目，以满足个人需求为首要任务，可能会有很多Bug吧。

# 核心思想

核心在于v-row与v-col两个组件的应用。

在Vui中不会有什么list-button，不会有什么list-item。将v-col与v-row多级嵌套后，里面放一个v-button控件，比什么都简单。前端框架这么多，哪里学得完。降低难度才是要务。


在Vui中你甚至不会看见什么navbar之类的东西，因为我觉得与其实现一个navbar，倒不如直接用一个v-row套四个v-col里面装上v-button来得实在。

在Vui中你也不会看见什么card之类的东西，v-row本来不就是一个card吗？至于里面的什么card-title与card-footer，只不过是v-col里面套上v-col罢了。