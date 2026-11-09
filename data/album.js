window.album = {
    title: "THE ROMANTIC",
    artist: "BRUNO MARS",
    releaseDate: "27 de fevereiro de 2026",
    genre: "Retro soul",
    labels: ["Atlantic Records"],
    cover: "assets/cover.jpg",
    description: "Quarto álbum de estúdio solo de Bruno Mars: nove canções de amor com sabor de soul dos anos 70. Produzido por Bruno Mars e D'Mile.",
    totalDuration: "31:30",

    // Desempenho nas paradas (botão "Paradas"). Deixe [] para esconder o botão.
    awards: [
        { title: "Billboard 200 (EUA)", detail: "Estreou em 1º lugar, com 186 mil unidades." },
        { title: "Top R&B/Hip-Hop Albums (EUA)", detail: "1º lugar." },
        { title: "Canadá", detail: "1º lugar." },
        { title: "Reino Unido", detail: "Estreou em 3º." },
        { title: "Austrália (ARIA)", detail: "Estreou em 2º." },
        { title: "Singles", detail: "\"I Just Might\" voltou ao 1º da Hot 100 por uma terceira semana; \"Risk It All\" estreou em 4º." }
    ],

    // Ficha técnica (botão "Ficha técnica"). Deixe {} para esconder o botão.
    technicalCredits: {
        "Produção": "Bruno Mars e D'Mile",
        "Gravadora": "Atlantic Records",
        "Estúdios": "Shampoo Press & Curl; Penrose Recorders (Riverside); Milkboy (Filadélfia)",
        "Lançamento": "27 de fevereiro de 2026"
    },

    // "credit": quem canta (aparece sob o título no player; se vazio, usa o artista do álbum).
    // "note": rótulo curto na lista de faixas (ex.: "Single").
    // "audio": caminho do arquivo. "lyrics": texto simples ou LRC [mm:ss.xx].
    // "translation" (opcional): tradução, em LRC com os mesmos tempos ou texto simples (uma linha por linha cantada).
    tracks: [
        {
            number: 1, title: "Risk It All",
            duration: "3:24",
            credit: "Bruno Mars",
            note: "Single",
            audio: "audio/01.flac",
            lyrics: `[00:22.29]For just a chance to win your heart
[00:27.55]You could set the bar
[00:30.67]Beyond the stars
[00:33.64]I'll do anything, anything you ask me to
[00:43.71]Say you want the moon, watch me learn to fly
[00:49.04]Ain't a mountain you could point to I wouldn't climb
[00:54.77]It's crazy, but it's true, there's nothing I won't do
[01:00.49]I'd risk it all for you
[01:06.93]To hold your hand and call you mine
[01:12.20]I'm tryna be your man
[01:14.77]Till the end of time
[01:17.56]Oh, I'll do anything, anything you ask me to
[01:28.03]I would run through a fire just to be by your side
[01:34.19]If your heart's on the line, you could take mine
[01:39.25]It's crazy, but it's true, there's nothing I won't do
[01:45.12]I'd risk it all for you
[01:51.60]I would swim across the sea just to show you
[01:57.17]Sacrifice my life just to hold you
[02:02.20]I could go on and on to prove that you belong
[02:07.45]Here in my arms
[02:34.99]Say you want the moon, watch me learn to fly
[02:40.73]Ain't a mountain you could point to I wouldn't climb
[02:46.25]It's crazy, but it's true, there's nothing I won't do
[02:52.21]I'd risk it all for you
[02:57.63]It's crazy, but it's true, there's nothing I won't do
[03:03.61]I'd risk it all for you
[03:11.08]`,
            translation: `Só pela chance de ganhar seu coração
Você poderia pedir o impossível, mais que as estrelas
Eu farei qualquer coisa
Qualquer coisa que você me pedir

Diga que você quer a Lua
Me veja aprender a voar
Não há montanha que você possa apontar
Que eu não escalaria
É loucura, mas é verdade
Não há nada que eu não faça
Eu arriscaria tudo por você

Pra segurar sua mão e te chamar de minha
Estou tentando ser o seu homem até o fim dos tempos
Oh, eu farei qualquer coisa
Qualquer coisa que você me pedir

Eu correria em meio ao fogo
Só pra estar ao seu lado
Se o seu coração estivesse em perigo
Você poderia ficar com o meu
É loucura, mas é verdade
Não há nada que eu não faça
Eu arriscaria tudo por você

Eu cruzaria o mar a nado só pra lhe mostrar
Sacrificaria a minha vida só pra te abraçar
Eu poderia continuar falando sem parar
Pra provar que o seu lugar é aqui nos meus braços

Diga que você quer a Lua
Me veja aprender a voar
Não há montanha que você possa apontar
Que eu não escalaria
É loucura, mas é verdade
Não há nada que eu não faça
Eu arriscaria tudo por você

É loucura, mas é verdade
Não há nada que eu não faça
Eu arriscaria tudo por você` },

        {
            number: 2, title: "Cha Cha Cha",
            duration: "3:57",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/02.flac",
            lyrics: `[00:16.43]You got me drinkin'
[00:20.21]Spendin' my money
[00:24.11]Got my lemon pepper steppers on
[00:26.56]Ooh, girl, you in trouble tonight
[00:31.28]I feel like dancin' (I feel like dancin')
[00:35.13]Lil' mama, you turn me on (Lil' mama, you turn me on)
[00:39.48]Move your body right here, just a little closer
[00:43.05]Next to mine
[00:47.13]C'mon and cha-cha-cha with me
[00:51.00]And I'ma cha-cha-cha with you tonight
[00:54.36]Uh, I like it like that
[00:56.95]She workin' that back
[00:58.95]I don't know how to act, ooh
[01:02.51]C'mon and cha-cha-cha with me
[01:06.33]And I'ma cha-cha-cha with you tonight
[01:09.76]Uh, I like it like that
[01:12.30]She workin' that back
[01:14.27]I don't know how to act, ooh
[01:33.27]It's on and poppin'
[01:37.04]The club bouncin'
[01:40.95]There's a party at The Pinky Ring
[01:43.32]Ooh, The Hooligans, we outside
[01:48.06]The spotlight's on you now (The spotlight's on you)
[01:52.01]Lemme see what you came to do (Lemme see what you came to do)
[01:56.29]Girl, the dance floor is yours
[01:58.26]And you're lookin' ready to set it on fire
[02:03.95]C'mon and cha-cha-cha with me
[02:07.76]And I'ma cha-cha-cha with you tonight
[02:11.17]Uh, I like it like that
[02:13.75]She workin' that back
[02:15.70]I don't know how to act, ooh
[02:19.28]C'mon and cha-cha-cha with me
[02:23.10]And I'ma cha-cha-cha with you tonight
[02:26.47]Uh, I like it like that
[02:29.07]She workin' that back
[02:31.09]I don't know how to act, ooh
[02:35.94]If you're ready, I'm ready, baby
[02:39.66]We can do this all night
[02:43.41]Let's go to the moon a little later
[02:47.30]Hope you ain't scared to fly
[03:05.38]C'mon and cha-cha-cha with me
[03:09.23]And I'ma cha-cha-cha with you tonight
[03:12.65]Uh, I like it like that
[03:15.13]She workin' that back
[03:17.14]I don't know how to act, ooh
[03:20.75]C'mon and cha-cha-cha with me
[03:24.09]Yeah, and I'ma cha-cha-cha with you tonight
[03:27.93]Uh, I like it like that
[03:30.54]She workin' that back
[03:32.45]I don't know how to act, ooh
[03:37.19]`,
            translation: `Você me fez comprar presentes
E gastar o meu dinheiro
Calcei os meus melhores sapatos
Uh, garota, você está em apuros esta noite

Uh, estou a fim de dançar (estou a fim de dançar)
Gata, você me deixa louco (gata, você me deixa louco)
Traga o seu corpo até aqui, só um pouquinho mais perto
Colado no meu (uh)

Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh
Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh-uh

A noite está tão agitada
A boate pulsando (ha-ha-ha-ha)
Tem uma festa na The Pinky Ring
Uh, nós, Os Hooligans, estamos nas ruas

Uh, os holofotes estão em você agora (os holofotes estão em você)
Me deixa ver o que você veio fazer (me deixa ver o que você veio fazer)
Garota, a pista de dança é sua e você parece pronta
Pra incendiá-la (uh)

Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh
Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh-uh

Se você estiver pronta, eu estou pronto, querida
Nós podemos fazer isso a noite toda
Vamos pra Lua um pouco mais tarde
Espero que as suas asas consigam voar

Uh-uh-uh-uh

Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh
Vem dançar cha-cha-cha comigo
E eu vou dançar cha-cha-cha com você esta noite
Oh, eu gosto assim, ela rebolando o quadril
Eu não sei como agir, uh-uh-uh-uh

Uh` },

        {
            number: 3, title: "I Just Might",
            duration: "3:32",
            credit: "Bruno Mars",
            note: "Single",
            audio: "audio/03.flac",
            lyrics: `[00:00.17] One, two, three, four
[00:05.48] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[00:09.81] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[00:14.57] You stepped inside with a vibe I ain't never seen
[00:20.84] Yes, you did, ooh
[00:23.00] So, girl, if you talk like you walk, come and talk to me
[00:31.31] But look here
[00:32.83] It would break my heart, break my heart, break my heart
[00:36.36] If I find out you can't move
[00:42.02] You better show me now, show me now, show me now
[00:46.10] 'Cause when I take you to the floor, ooh, you gotta get down
[00:49.36] You know what to do
[00:50.90] Hey, Mr. DJ (Oh, oh, oh)
[00:54.61] Play a song for this pretty little lady (Oh, oh, oh)
[00:59.17] 'Cause if she dance as good as she look right now (Oh, oh, oh)
[01:03.69] I just might, I just might make her my baby
[01:06.78] I just might make her my baby, hey
[01:10.23] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[01:13.46] I just might
[01:15.09] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[01:17.80] Oh, I just might
[01:19.29] But, first, may I just say that your face got me so intrigued?
[01:26.40] I'm so intrigued
[01:29.33] But what good is beauty if your booty can't find the beat?
[01:34.46] I don't wanna know, girl
[01:36.26] So, please don't do that to me
[01:38.10] 'Cause it would break my heart, break my heart, break my heart
[01:41.65] If I find out you can't move
[01:47.26] You better show me now, show me now, show me now
[01:51.38] 'Cause when I take you to the floor, ooh, you gotta get down
[01:54.46] You know what to do
[01:56.15] Hey, Mr. DJ (Oh, oh, oh)
[02:00.00] Play a song for this pretty little lady (Oh, oh, oh)
[02:04.56] 'Cause if she dance as good as she look right now (Oh, oh, oh)
[02:08.87] I just might, I just might make her my baby
[02:11.92] I just might make her my baby, hey
[02:16.92] Woah, woah, woah, woah, woah
[02:21.68] Woah, woah, woah, woah, woah
[02:24.91] This the part where you break it all the way down, down, down, down
[02:29.68] This the part where I turn you all the way around, 'round, 'round, 'round
[02:34.19] Put some spirit in it, put your heart into it
[02:37.76] That's all I need
[02:39.74] And if I like what I see, you're comin' home with me
[02:42.94] Hey, Mr. DJ (Oh, oh, oh)
[02:46.61] Play a song for this pretty little lady (Oh, oh, oh)
[02:51.24] 'Cause if she dance as good as she look right now (Oh, oh, oh)
[02:55.56] I just might, I just might make her my baby
[02:58.49] I just might make her my baby
[03:01.32] Hey, Mr. DJ (Oh, oh, oh)
[03:05.12] Play a song for this pretty little lady (Oh, oh, oh)
[03:09.60] 'Cause if she dance as good as she look right now (Oh, oh, oh)
[03:14.28] I just might, I just might make her my baby
[03:17.11] I just might make her my baby, hey
[03:21.11] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[03:24.02] I just might
[03:25.82] Doo-doo, doo-doo, doo-doo, doo-doo-doo
[03:28.49] Oh, I just might
[03:29.91] `,
            translation: `Um, dois, três, quatro

Du-du, du-du, du-du, du-du-du
Du-du, du-du, du-du, du-du-du

Você chegou aqui com uma energia que eu nunca tinha visto antes
Sim, chegou mesmo, uh
Então, garota, se você é confiante como parece, venha falar comigo
Mas preste atenção

Ia partir meu coração, partir meu coração, partir meu coração
Se eu descobrisse que você não consegue se mexer
É melhor você me mostrar agora, me mostrar agora, me mostrar agora
Porque quando eu te levar para a pista, uh, você tem que descer até o chão
Você sabe o que fazer

Ei, Senhor DJ (oh-oh-oh)
Toque uma música para esta linda garota (oh-oh-oh)
Porque, se ela dança tão bem quanto está linda agora (oh-oh-oh)
Eu posso acabar, posso acabar a chamando de meu amor
Eu posso acabar a chamando de meu amor, ei

Du-du, du-du, du-du, du-du-du
Eu acho que posso
Du-du, du-du, du-du, du-du-du
Oh, eu acho que posso

Mas, antes de mais nada, me permite dizer que o seu rosto me deixou muito intrigado?
Estou tão intrigado
Mas de que serve a beleza se o seu bumbum não consegue rebolar na batida?
Eu não quero saber, garota
Então, por favor, não faça isso comigo

Ia partir meu coração, partir meu coração, partir meu coração
Se eu descobrisse que você não consegue se mexer
É melhor você me mostrar agora, me mostrar agora, me mostrar agora
Porque quando eu te levar para a pista, uh, você tem que descer até o chão
Você sabe o que fazer

Ei, Senhor DJ (oh-oh-oh)
Toque uma música para esta linda garota (oh-oh-oh)
Porque, se ela dança tão bem quanto está linda agora (oh-oh-oh)
Eu posso acabar, posso acabar a chamando de meu amor
Eu posso acabar a chamando de meu amor, ei

Uou, uou, uou, uou, uou
Uou, uou, uou, uou, uou

Essa é a parte que você requebra até o chão, chão, chão, chão
Essa é a parte que eu faço você girar, girar, girar, girar
Se dedique de corpo e alma, isso é tudo que eu preciso
E se eu gostar do que eu vejo, você vai para casa comigo

Ei, Senhor DJ (oh-oh-oh)
Toque uma música para esta linda garota (oh-oh-oh)
Porque, se ela dança tão bem quanto está linda agora (oh-oh-oh)
Eu posso acabar, posso acabar a chamando de meu amor
Eu posso acabar a chamando de meu amor

Ei, Senhor DJ (oh-oh-oh)
Toque uma música para esta linda garota (oh-oh-oh)
Porque, se ela dança tão bem quanto está linda agora (oh-oh-oh)
Eu posso acabar, posso acabar a chamando de meu amor
Eu posso acabar a chamando de meu amor, ei

Du-du, du-du, du-du, du-du-du
Eu acho que posso
Du-du, du-du, du-du, du-du-du
Oh, eu acho que posso` },

        {
            number: 4, title: "God Was Showing Off",
            duration: "3:31",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/04.flac",
            lyrics: `[00:07.93]Hey
[00:11.32]Oh, ooh
[00:14.32]Is it your eyes that light my sky?
[00:20.31]I bet in the pouring rain, you still shine
[00:26.09]Is Heaven your name? Or is it Divine? (Is Heaven your name? Or is it Divine?)
[00:32.22]Don't matter, girl, it's gonna look good next to mine
[00:38.13]Oh, you lil' earth angel, the way you're put together
[00:41.78]Only God can do (Only God can do)
[00:44.60]Yeah, I know it, I know it, I know it, I know (God was showing off)
[00:49.57]While making you
[00:55.34]Ooh (God was showing off making you, girl)
[01:01.12]Ooh, honey, you are a miracle to me
[01:08.15]No, you ain't gotta hide your wings, set them free
[01:13.02]Set 'em free
[01:14.53]Your hair, your face, your skin, your lips
[01:17.72]I ain't never seen beauty like this
[01:20.38]I was blind, but now I see
[01:26.02]Ooh, you lil' earth angel, the way you're put together
[01:29.73]Only God can do (Only God can do)
[01:32.61]Yeah, I know it, I know it, I know it, I know (God was showing off)
[01:37.69]While making you
[01:43.09]Oh yeah (God was showing off making you, girl)
[01:46.16]Showing off
[01:49.27]God was showing off while making you, making you, yeah (God was showing off making you, girl)
[01:58.18]Showing off, ooh
[02:03.74]You know, whoever said God don't have favorites never seen you before
[02:09.62]Now everybody got something special, but it's obvious you've been blessed with just a little more
[02:15.37]Help me sing
[02:16.18]Hallelujah, hallelujah (Hallelujah)
[02:19.16]Hallelujah, hallelujah (Hallelujah)
[02:22.29]Hallelujah, hallelujah (Ooh, you make me wanna sing)
[02:25.22]Hallelujah
[02:26.58]Oh, you lil' earth angel, the way you're put together
[02:29.82]Only God can do (Only God can do)
[02:31.74]I know it, babe, know it, babe, know it, girl (God was showing off)
[02:37.53]While making you, woo!
[02:45.09]God was showing off making you, girl
[02:49.88]I'm talking flexing up in Heaven
[02:53.24]Flexing up in Heaven (God was showing off making you, girl)
[02:58.13]Showing off
[03:01.25]Come on, rock with me, baby
[03:04.22](Rock, rock) Hey
[03:07.32](Rock, rock) I bet you can walk on water, can't you, girl?
[03:10.25](Rock, rock) And then you can turn that water into wine
[03:14.05]'Cause you've been touched by the light
[03:17.13]The light
[03:22.26]`,
            translation: `Ei
Oh-uh-uh-uh

São os seus olhos que iluminam o meu céu?
Eu aposto que, mesmo sob chuve forte, você ainda brilha
Céu é o seu nome (Céu é o seu nome)
Ou é Divina? (Ou é Divina?)
Não importa, garota, vai ficar lindo ao lado do meu

Oh, anjinha na Terra
O jeito que você foi feita, só Deus pode fazer (só Deus pode fazer)
Sim, eu sei, eu sei, eu sei, eu sei
(Deus estava se exibindo) quando fez você, uh-uh
(Deus estava se exibindo quando fez você, garota)

Uh, docinho, você é um milagre pra mim
Não, você não precisa esconder as suas asas
Pode libertá-las, liberte elas
Seu cabelo, seu rosto, sua pele, seus lábios
Eu nunca vi uma beleza como essa
Eu era cego, mas agora eu vejo

Uh, anjinha na Terra
O jeito que você foi feita, só Deus pode fazer (só Deus pode fazer)
Sim, eu sei, eu sei, eu sei, eu sei
(Deus estava se exibindo) quando fez você, oh, sim
(Deus estava se exibindo) se exibindo (quando fez você, garota)
Deus estava se exibindo quando fez você, quando fez você, sim
(Deus estava se exibindo) se exibindo (quando fez você, garota), uh-uh

Sabe, quem quer que tenha dito que Deus não tem favoritos
Nunca viu você antes
Ora, todo mundo tem alguma coisa especial
Mas é óbvio que você foi abençoada com um algo a mais
Me ajude a cantar

Aleluia, aleluia (aleluia)
Aleluia, aleluia (aleluia)
Aleluia, aleluia (uh, você me fez querer cantar)
Aleluia

Oh, anjinha na Terra
O jeito que você foi feita, só Deus pode fazer (só Deus pode fazer)
Ah-ah-ah, eu sei, querida, eu sei, querida eu sei, garota
(Deus estava se exibindo) quando fez você, uou
(Deus estava se exibindo) oh, quando fez você, garota (quando fez você, garota)
É como se ele tivesse tirado onda lá no Céu, tirado onda lá no Céu, uh-uh
(Deus estava se exibindo) se exibindo (quando fez você, garota)
Vem, dance comigo, meu bem

(Dance, dance) ei
(Dance, dance) eu aposto que você consegue andar sobre as águas, não consegue, garota?
(Dance, dance) e também consegue transformar essa água em vinho
(Dance, dance) porque você foi tocada pela luz
(Dance, dance) a luz
(Dance, dance) sim
(Dance, dance) sim
(Dance, dance)` },

        {
            number: 5, title: "Why You Wanna Fight?",
            duration: "4:14",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/05.flac",
            lyrics: `[00:30.78]Why you wanna fight with me, baby?
[00:38.48]Wouldn't you rather make love tonight?
[00:45.76]Tell me why you wanna fight with me, baby?
[00:53.33]Let me show you I can make it right
[01:02.81]You want me knockin' on the door, crying in the rain
[01:07.33]Babygirl, for you I'll do all them things (I'm beggin, beggin' don't go)
[01:11.96]I'm beggin', baby, I'm beggin' don't go, baby, no, no, no
[01:18.86]I've apologized but you keep going on
[01:22.68]Ain't too proud to say it, I admit, I was wrong
[01:29.67]Stop playin' with me, come back home
[01:32.25]Why you wanna fight with me, baby? (Why you wanna fight?)
[01:40.02]Wouldn't you rather make love tonight? (Sweet love)
[01:47.19]Tell me why you wanna fight with me, baby? (Why you wanna fight?)
[01:54.79]Let me show you I can make it right
[02:04.64]Just run into my arms, let's just start again
[02:08.73]Girl, I'll call your mama, plead with all your friends (I'll do it, do it for us)
[02:13.60]Yes, I'll do, oh, I'll do it for us 'cause enough is enough
[02:20.29]We can work things out, don't say that it's through
[02:24.18]You may hate me now, but I never stopped loving you
[02:31.46]That's what we not gon' do
[02:33.65]Why you wanna fight with me, baby? (Why you wanna fight?)
[02:41.37]Wouldn't you rather make love tonight? (Sweet love)
[02:48.60]Tell me why you wanna fight with me, baby? Oh (Why you wanna fight?)
[02:56.24]Let me show you I can make it right
[03:02.27]I can make it right, I, I can, yeah
[03:05.88]Come home, home
[03:13.88]I can't stop thinkin' about you, girl
[03:17.61]My world just ain't the same without you, girl
[03:21.23]Come home, home
[03:28.90]If your heart hurt just like mine
[03:32.59]I'ma ask you one more time
[03:35.10]Why you wanna fight with me, baby? (Why you wanna fight?)
[03:42.71]Wouldn't you rather make love, sweet love? (Sweet love)
[03:50.46]Why, why, why, why, why-why-why? (Why you wanna fight?)
[03:57.84]When I told you I can make it right
[04:04.47]Oh, I can make it right tonight
[04:09.41]`,
            translation: `Por que você quer brigar comigo, gata?
Você não preferiria fazer amor esta noite?
Me diga, por que você quer brigar comigo, gata?
Me deixa mostrar que eu posso consertar as coisas (uh)

Você quer que eu bata na porta, chore lá na chuva
Gatinha, por você, eu vou fazer todas essas coisas
(Eu estou implorando) estou implorando, gata (implorando, não vá)
Eu estou implorando, não vá, gata, não, não, não (uh-uh)
Eu já pedi desculpas, mas você continua insistindo
Não sou orgulhoso demais pra dizer que admito, eu estava errado
Pra de brincar comigo, volta pra casa

Por que você quer brigar comigo, gata? (Por que você quer brigar?)
Você não preferiria fazer amor esta noite? (Doce amor)
Me diga, por que você quer brigar comigo, gata? (Por que você quer brigar?)
Me deixa mostrar que eu posso consertar as coisas (oh-oh-oh-oh)

Basta correr pra os meus braços, vamos só recomeçar
Garota, eu vou ligar pra a sua mãe, implorar pra todos os seus amigos
(Eu vou fazer isso) sim (eu vou fazer isso por nós) oh
Eu vou fazer isso por nós, porque já chega
Nós podemos resolver isso, não diga que acabou
Você pode me odiar agora, mas eu nunca vou deixar de te amar
Isso é o que nós não vamos fazer

Por que você quer brigar comigo, gata? (Por que você quer brigar?)
Você não preferiria fazer amor esta noite? (Doce amor)
Me diga, por que você quer brigar comigo, gata? É (por que você quer brigar?)
Me deixa mostrar que eu posso consertar as coisa
Eu posso consertar as coisas, oh, oh, gata

(Volte pra casa) oh-oh
(Pra casa) uh
Eu não consigo parar de pensar em você, garota
O meu mundo simplesmente não é o mesmo sem você, garota, oh

(Volte pra casa) oh-uh
(Pra casa) uh
Se o seu coração dói assim como o meu
Eu vou te perguntar mais uma vez

Por que você quer brigar comigo, comigo, gata? (Por que você quer brigar?)
Você não preferiria fazer amor? Doce amor (doce amor), suor, lágrimas e amor
Por que, por que, por que, por que, por que, por que, por que? (Por que você quer brigar?)
Me deixa mostrar que eu posso consertar as coisa

Oh, eu posso consertar as coisas esta noite` },

        {
            number: 6, title: "On My Soul",
            duration: "2:54",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/06.flac",
            lyrics: `[00:16.44]Baby, we should be together
[00:20.06]Love's so hard to find
[00:23.76]Break your heart, I would never
[00:27.42]Girl, I'd rather die (Say, baby)
[00:31.52]I really want ya (Say, baby)
[00:35.16]I wanna give you my name (Say, baby)
[00:38.81]I'll forever be yours
[00:40.71]Every hour, every night, every day
[00:43.90]On my soul
[00:48.02]I'ma love you like you never been loved before
[00:51.34]On my soul
[00:55.43]I'ma love you like you never been loved before
[00:58.76]Put it on anything, put it on everything
[01:02.60]On my soul
[01:04.48]On my soul
[01:08.06]I've traveled all around the world
[01:11.82]And now here you are
[01:15.04]Turns out you don't need a rocket ship, no
[01:18.75]To find your own shooting star (Say, baby)
[01:23.20]I really want ya (Say, baby)
[01:26.66]I wanna give you my name (Say, baby)
[01:30.52]I'll forever be yours
[01:32.42]Every hour, every night, every day
[01:35.65]On my soul
[01:39.05]Yeah
[01:39.82]I'ma love you like you never been loved before
[01:43.06]On my soul
[01:47.15]I'ma love you like you never been loved before
[01:50.46]Put it on anything, put it on everything
[01:54.36]On my soul
[01:56.12]On my soul
[02:04.97]I'm tryna live the dream, but I need you on my team
[02:09.12]So if you want me like I want you, let me hear you scream
[02:14.11]Oh, oh, oh
[02:17.77]Oh, oh, oh
[02:21.56]Oh, oh, oh
[02:24.95]Yeah, yeah
[02:27.30]On my soul
[02:31.48]I'ma love you like you never been loved before
[02:34.44]Put it on my soul
[02:38.84]I'ma love you like you never been loved before
[02:41.42]Oh, put it on anything, put it on everything
[02:46.04]On my soul
[02:47.82]On my soul
[02:50.55]`,
            translation: `Querida, nós deveríamos ficar juntos
O amor é tão difícil de encontrar
Partir seu coração? Eu nunca faria isso
Garota, eu preferiria morrer (diga, querida)

Eu te quero de verdade (diga, querida)
Eu quero te dar o meu nome (diga, querida)
Eu serei seu para sempre
Toda hora, toda noite, todo dia

Pela minha alma
Eu vou te amar como você nunca foi amada antes
Pela minha alma
Eu vou te amar como você nunca foi amada antes
Juro por qualquer coisa, juro por tudo
Pela minha alma, pela minha alma

Eu viajei pelo mundo inteiro
E agora aqui está você
Acontece que você não precisa de uma nave espacial, não
Para encontrar sua própria estrela cadente (diga, querida)

Eu te quero de verdade (diga, querida)
Eu quero te dar o meu nome (diga, querida)
Eu serei seu para sempre
Toda hora, toda noite, todo dia

Pela minha alma, é
Eu vou te amar como você nunca foi amada antes
Pela minha alma, é
Eu vou te amar como você nunca foi amada antes
Juro por qualquer coisa, juro por tudo
Pela minha alma, pela minha alma

Ah-ah-ah, estou tentando viver o sonho
Mas eu preciso de você no meu time
Então se você me quer como eu te quero
Deixe-me ouvir você gritar (woo-hoo)
Ah, uou, uou (woo-hoo)
Ah, uou-oh (woo-hoo)
Ah, uou, ah-uou (woo-hoo)
É, é-ei

Pela minha alma, ah
Eu vou te amar como você nunca foi amada antes
Juro pela minha alma, hu-uh
Eu vou te amar como você nunca foi amada antes
Ah, juro por qualquer coisa, juro por tudo
Pela minha alma, pela minha alma` },

        {
            number: 7, title: "Something Serious",
            duration: "2:46",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/07.flac",
            lyrics: `[00:14.80]Ooh, I got it bad for ya
[00:18.27]Ya gotta understand
[00:22.08]You should be my boo thang, my boo thang
[00:25.77]I should be ya mans
[00:29.20]Girl, don't you want that real love?
[00:32.79]I'll always have your back
[00:36.72]Don't you want some pretty babies, pretty babies?
[00:40.32]I could give you that
[00:44.17]Us together
[00:47.81]Us together sound like
[00:50.65]Something serious
[00:52.61]Yeah, yeah
[01:09.37]Ooh, I got it bad for ya (Yeah, yeah, yeah)
[01:12.86]Ya gotta understand (Ooh, yeah, yeah, yeah)
[01:16.07]Ooh, you should be my boo thang, boo thang
[01:20.30]I should be ya mans (Ooh, yeah, yeah, yeah)
[01:23.32]Now don't you, don't you want that real love? (Yeah, yeah, yeah)
[01:26.91]Girl, I'll always have your back (Ooh, yeah, yeah, yeah)
[01:30.58]Don't you want some pretty brown Bruno babies?
[01:34.83]I could give you that (Ooh, yeah, yeah, yeah)
[01:37.68]You know I can
[01:38.79]Us together
[01:42.36]Us together sound like
[01:45.23]Something serious
[01:47.08]Yeah, yeah
[02:04.18]Us together
[02:07.83]Us together sound like
[02:10.70]Something serious
[02:12.58]Yeah, yeah (Yeah, yeah, yeah)
[02:17.84]Ah, baby (Ooh, yeah, yeah, yeah)
[02:21.47]Say that you need me, girl (Yeah, yeah, yeah)
[02:25.09]Say that you want me, baby (Ooh, yeah, yeah, yeah)
[02:28.76]Come on, come on, come on, baby, now (Yeah, yeah, yeah)
[02:32.37]Come on, come on, come on, baby, yeah (Ooh, yeah, yeah, yeah)
[02:36.26]Let's talk about me and you (Yeah, yeah, yeah)
[02:40.07]Talk about you and me (Ooh, yeah, yeah, yeah)
[02:43.78]`,
            translation: `Uh, estou caidinho por você
Você tem que entender
Você deveria ser a minha namorada, minha namorada
Eu deveria ser o seu homem
Garota, você não quer esse amor verdadeiro?
Eu sempre vou te proteger
Você não quer uns bebês lindos, bebês lindos?
Eu poderia te dar isso

Nós juntos (ah-ah-ah)
Nós juntos (algo leve)
Algo sério
É, é

Uh, uh, estou caidinho por você (uh, é, é, é)
Você tem que entender (uh, é, é, é)
Você deveria ser a minha namorada, namorada
Eu deveria ser o seu homem (uh, é, é, é)
Agora, você não, você não quer esse amor verdadeiro? (É, é, é)
Garota, eu sempre vou te proteger (uh, é, é, é)
Você não quer uns bebês lindos e morenos do Bruno?
Eu poderia te dar isso (uh, é, é, é)
Você sabe que eu posso

Nós juntos (uh)
Nós juntos (algo leve)
Algo sério
É, é
Uh, é

Nós juntos (uh)
Nós juntos (algo leve)
Algo sério
É, é

(É, é, é)
Eu estarei lá (uh, é, é, é)
Diga que você precisa de mim, garota (é, é, é)
Diga que você me quer, meu bem (uh, é, é, é)
Vamos, vamos, vamos, meu bem, é (é, é, é)
Vamos, vamos, vamos, meu bem, é (uh, é, é, é)
Vamos falar sobre eu e você (é, é, é)
Falar sobre você e eu (uh, é, é, é)` },

        {
            number: 8, title: "Nothing Left",
            duration: "3:34",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/08.flac",
            lyrics: `[00:04.75] You used to light up when I called to say I love you
[00:11.62] But these days, maybe those words don't hit the same, uh
[00:17.90] All alone in this home that we built, just thinking of you
[00:24.18] Thought our light would never fade away

[00:27.82] But the fire don't burn (ooh) like it used to, girl, no
[00:33.95] Don't wanna let you go, but you know something's got to change

[00:40.14] Feels like I'm (I'm), I'm reaching out
[00:46.78] With nothing left to hold on to
[00:52.10] Feels like I'm (I'm), I'm reaching out
[00:59.70] With nothing left to hold on to

[01:07.55] I, I, I, I'm looking for the magic, I can't seem to find it in your eyes
[01:15.39] The smile on your face that I used to make is long been gone, uh
[01:21.74] And it kills me to think somewhere I lost my baby
[01:28.19] Oh, we been together so long

[01:31.63] But the fire don't burn (ooh) like it used to, girl, no
[01:37.79] Don't wanna let you go, but you know something's got to change, got to change

[01:43.82] Feels like I'm (I'm), I'm reaching out
[01:50.50] With nothing left to hold on to
[01:56.50] Feels like I'm (I'm), I'm reaching out
[02:03.06] With nothing left to hold on to, baby

[02:32.38] Yeah, yeah, oh

[02:35.50] It feels like I'm (I'm), I'm, I'm reaching out
[02:42.06] With nothing left to hold on to
[02:47.30] Feels like I'm (I'm), I'm reaching out
[02:54.78] With nothing left to hold on to

[03:02.91] (Ooh) something's gotta change
[03:05.70] (Ooh) we can't let our love slip away
[03:09.35] (Ah) I'm reaching out for you, baby
[03:11.99] (Ah) I need you to reach out and do the same
[03:13.98] Come on
[03:15.10] Ooh-ooh (ooh)
[03:18.26] Oh-oh
[03:21.14] (Ah) ah
[03:24.00]`,
            translation: `Você se iluminava quando eu ligava pra dizer que te amo
Mas hoje em dia, talvez essas palavras não tenham o mesmo efeito, uh
Tão sozinho nesta casa que construímos, só pensando em você
Pensei que a nossa luz nunca se apagaria

Mas o fogo não queima (uh) como antes, garota, não
Não quero te perder, mas você sabe que algo tem que mudar

Parece que estou (estou), estou tentando te alcançar
Sem mais nada a que me agarrar
Parece que estou (estou), estou tentando te alcançar
Sem mais nada a que me agarrar

Eu, eu, eu, procuro a magia, e não consigo encontrá-la em seus olhos
O sorriso em seu rosto que eu costumava provocar há muito se foi, uh
E me mata pensar que em algum momento eu perdi a minha querida
Ah, estamos juntos há tanto tempo

Mas o fogo não queima (uh) como antes, garota, não
Não quero te perder, mas você sabe que algo tem que mudar, tem que mudar

Parece que estou (estou), estou tentando te alcançar
Sem mais nada a que me agarrar
Parece que estou (estou), estou tentando te alcançar
Sem mais nada a que me agarrar, meu bem

É, é, ah

Parece que estou (estou), estou, estou tentando te alcançar
Sem mais nada a que me agarrar
Parece que estou (estou), estou tentando te alcançar
Sem mais nada a que me agarrar

(Uh) algo tem que mudar
(Uh) não podemos desistir do nosso amor
(Ah) estou estendendo a mão para você, meu bem
(Ah) preciso que você estenda a mão e faça o mesmo
Vamos lá
Uh-uh (uh)
Ah-ah
(Ah) ah` },

        {
            number: 9, title: "Dance with Me",
            duration: "3:39",
            credit: "Bruno Mars",
            note: "",
            audio: "audio/09.flac",
            lyrics: `[00:14.83]Dance with me, darling
[00:18.75]Just one more time
[00:23.07]Take my hand and let's just slow dance all night
[00:30.67]Girl, you know I'm hoping, hoping
[00:35.61]When the music ends
[00:39.19]You and I will fall in love all over again
[00:46.41]Dance with me, darling
[00:50.28]Just one more time
[00:54.60]Put your pride aside, right here next to mine
[01:02.20]Girl, you know I'm hoping, hoping
[01:07.09]When the music ends
[01:10.70]You and I will fall in love all over again
[01:17.26]Yeah
[01:17.92]All the stars are out tonight
[01:20.21]All the stars are out tonight
[01:25.40]Ooh, maybe they'll shine a little light
[01:30.04]Help us find what we're trying to find
[01:35.90]It's been so long since I held you tight
[01:42.51]I won't let you go till we get it right
[01:49.73]Will you dance with me, darling?
[01:55.54]One more time
[01:59.75]It's the only thing that we ain't try
[02:05.10]Girl, you know I'm hoping, hoping
[02:10.04]When the music ends
[02:13.28]You and I
[02:14.89]You and I
[02:16.56]Will fall in love
[02:18.84]Fall in love
[02:20.08]All over again
[02:28.42]All over again
[02:36.11]Will you dance with me, darling?
[02:37.55]Dance with me, darling, dance with me just one more time
[02:41.80]Please, please, please
[02:45.46]Dance with me, darling, dance with me just one more time
[02:48.76]Oh, just one more time
[02:53.26]Dance with me, darling, dance with me just one more time
[02:54.54]Oh, I gotta let you know, baby, I still love you
[03:01.17]Dance with me, darling, dance with me just one more time
[03:03.96]And I don't wanna dance with nobody, nobody, nobody but you
[03:09.00]Dance with me, darling, dance with me just one more time
[03:15.48]Nobody but you
[03:16.89]Dance with me, darling, dance with me just one more time
[03:22.11]Ooh-ooh, ooh-ooh-ooh-ooh
[03:24.70]Dance with me, darling, dance with me just one more time
[03:28.01]Ooh-ooh, ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh
[03:34.99]`,
            translation: `Uh-uh-uh, uh, uh, uh, uh (hum)
Uh-uh-uh, uh, uh, uh

Dance comigo, querida
Só mais uma vez
Pegue minha mão e vamos dançar lentamente a noite inteira
Garota, você sabe que eu torço
Torço para que quando a música acabar
Você e eu nos apaixonemos de novo

Dance comigo, querida
Só mais uma vez
Deixe seu orgulho de lado, bem aqui junto ao meu
Garota, você sabe que eu torço
Torço para que quando a música acabar
Você e eu nos apaixonemos de novo, é

(Todas as estrelas) todas as estrelas brilham esta noite
Uh, talvez elas derramem um pouco de luz
Para nos ajudar a encontrar o que tentamos encontrar
Faz tanto tempo que eu não te abraço apertado
Não vou te soltar até acertarmos as coisas
Dança comigo, querida
Mais uma vez?

É a única coisa que nos resta tentar
Garota, você sabe que eu torço
Torço para que quando a música acabar
Você e eu (você e eu) nos apaixonemos (nos apaixonemos) de novo
(Uh-uh-uh-uh, uh, uh, uh, uh) de novo
(Uh-uh-uh-uh, uh, uh, uh, uh)

Você dança comigo, querida? (Dance comigo, querida, dance comigo só mais uma vez)
Por favor, por favor, por favor (dance comigo, querida, dance comigo só mais uma vez)
Ah, só mais uma vez (dance comigo, querida, dance comigo só mais uma vez)
Ah, preciso que saiba, meu bem, que eu ainda te amo (dance comigo, querida, dance comigo só mais uma vez)
E eu não quero dançar com ninguém, ninguém, ninguém além de você (dance comigo, querida, dance comigo só mais uma vez)
Ninguém além de você (dance comigo, querida, dance comigo só mais uma vez)
Uh, uh-uh-uh-uh (dance comigo, querida, dance comigo só mais uma vez)
Uh, uh, uh, uh-uh-uh` }
    ]
};
