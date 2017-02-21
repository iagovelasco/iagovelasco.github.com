---
layout: post
title: "Servico de Email - JavaScript"
description: Receba email de freela, clientes de graça utilizando JavaScript
image: '/assets/images/blog/formspree.png'
---
## Envio de email com JavaScript

Imagine que você acabou de criar um site usando páginas estáticas, seja com a ajuda de Jekyll ou simplesmente usando alguns arquivos HTML, mas agora você deseja adicionar um formulário de contato. Você pode vincular a um serviço on-line, instalar algo pré-construído em seu servidor, ou construir algo a partir do zero usando o PHP, mas isso significa que você está completamente restrito no projeto ou está colocando mais esforço em um único formulário do que você fez para todo o site.

Com a ajuda na web hoje em dia, descobri que existe um serviço que podemos usar de uma forma gratuita, sendo 1000  envios de email a cada mês, com um simples javascript. Outro ponto positivo, é que geralmente os meus sites são desenvolvidos com jekyll e derivados e consigo hospedar com  próprio github pages, sem pagar nada de servidor, ou seja, o envio de email e hospedagem é de graça.

### Utilizando formspree

Primeiramente, para exemplo, de um clone do projeto abaixo

{% highlight bash %}
git clone https://github.com/iagovelasco/formspree
{% endhighlight %}

Em seguinda, faça o download do Jekyll.

Se já tiver instalado pode ignorar esta parte.

{% highlight bash %}
gem install jekyll bundler
{% endhighlight %}

Navegue até o projeto clonado, no meu caso é:


{% highlight bash %}
cd Projetos/formspree
{% endhighlight %}

e execute o comando:


{% highlight bash %}
jekyll server
{% endhighlight %}

Abra o navegador e acesse localhost:4000,que deve estar igual a imagem abaixo:

<img src="/assets/images/blog/formspree/formulario.png">

Para configurarmos o recebimento de email, abra o projeto no seu editor de texto preferido, e logo em seguida abra o arquivo mail.js.

No lugar da url coloque o seu email.

{% highlight bash %}
$(document).ready(function (){
  
	"use strict";
	 

	 $('#contact-form-holder').submit(onSubmitForm);
	 $('#alert').removeClass('alert-danger')
	


    function onSubmitForm(event) {
    event.preventDefault();
    var form = this;
    var btnEnviar = $(form).find('.btn-primary');

    btnEnviar.button('loading');
    $.ajax({
      url: '//formspree.io/SEU EMAIL AQUI',
      method: 'POST',
      dataType: 'json',
      data: {
        nome: $(form).find('input[name="name"]').val(),
        Sobrenome: $(form).find('input[name="surname"]').val(),
        email: $(form).find('input[name="email"]').val(),
        mensagem: $(form).find('textarea[name="message"]').val()
      },
      success: function() {
        $('#alert')
          .removeClass('alert-danger')
          .addClass('alert-success')
          .text('Obrigado! Recebemos a sua mensagem!')
          .show();

           $(form).find('input[name="name"]').val(""),
           $(form).find('input[name="email"]').val(""),
           $(form).find('textarea[name="surname"]').val(""),
           $(form).find('textarea[name="message"]').val("")
           btnEnviar.button('reset');
      },
      error: function() {
        $('#alert')
          .removeClass('alert-success')
          .addClass('alert-danger')
          .text('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde!')
          .show();

           $(form).find('input[name="name"]').val(""),
           $(form).find('input[name="email"]').val(""),
           $(form).find('textarea[name="surname"]').val(""),
           $(form).find('textarea[name="message"]').val("")
           btnEnviar.button('reset');
      },
      complete: function() {
     
    

      }
    });
  }


});
{% endhighlight %}


Com o formspree já configurado, abrá o site que está rodando em localhost:4000, preencha o formulário, e no lugar do email, digite o mesmo email que colocou no arquivo mail.js.

Após isso clique em enviar.

<img src="/assets/images/blog/formspree/seuEmailAqui.png">

Você será direcionado para esta tela:

<img src="/assets/images/blog/formspree/confirmation.png">

Após confirmado em sua caixa de email pessoal, o envio de email formspree já estará funcionando.



<img src="/assets/images/blog/formspree/msgRecebida.png">


Agora é só desenvolver o seu site, e configurá-lo para ir para produção com o serviço de envio de email.