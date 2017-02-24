---
layout: post
title: "Mostrar branch no terminal Ubuntu"
description: Nome da branch no terminal linux
image: '/assets/images/blog/terminal.png'
---
Github é uma das ferramentas mais importantes para os desenvolvedores hoje em dia. Uma de suas grandes caracteristicas é a branch e o merge. Sempre quando eu estou trabalhando com o git eu tenho que dar o comando git status para ver qual branch eu estou atuando, consequentemente saber qual branch estamos trabalhando é meio confuso, não só para mim, mas para diversos desenvolvedores.

O sistema operacional que utilizo é <b>Linux</b>, então está dica serve para quem o utiliza.

Portanto quem trabalha com o controlador de versão <b>Linux</b> provavelmente utiliza o nosso querido <b><i>Terminal</i></b>.

E a solução para isso é fazer com que o nosso terminal exiba o nome da branch atual que estamos atuando:


<img src="/assets/images/blog/post-nomeBranch/terminal-branch.png">

#### Instalação

Primeiramente abra o seu terminal e crie um diretório .bash e clona o o projeto a seguir:

{% highlight bash %}
 $ mkdir ~/.bash 
 $ cd ~/.bash 
 $ git clone https://github.com/jimeh/git-aware-prompt.git 
{% endhighlight %}

Edite o seu ~/.bashrc e adicione o seguinte código:

{% highlight bash %}
export GITAWAREPROMPT=~/.bash/git-aware-prompt
source "${GITAWAREPROMPT}/main.sh"
export PS1="\${debian_chroot:+(\$debian_chroot)}\u@\h:\w \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\]\$ "
{% endhighlight %}

Agora de o comando <b>cd</b> para um diretório <b>git</b> e irá aparecer o nome da branch.

Com isso nossa vida se torna melhor sabendo qual branch que estamos atuando.