export const CONFIG = {
    SCENES: {
        LOAD: "LOAD",
        INTRO: "INTRO",
        HAND_WASHER: "HAND_WASHER",
        SHOPPING: "SHOPPING",
        MASK_INVADER: "MASK_INVADER",
        OUTRO: "OUTRO"
    },
    ASSETS: {
        MAIN_MENU: {
            IMAGES: {
                message_box : 'message_box.png'
            },
            SPRITESHEETS: {
                background : ['background.jpg', 700, 394]
            },
            AUDIOS: {
                typewrite : 'typewrite.wav',
                sound_ambiance_exterior : 'sound_ambiance_exterior.mp3'
            }
        },
        HAND_WASHER: {
            IMAGES: {
                hw_hand_left : 'hand_left.png',
                hw_hand_right : 'hand_right.png',
                hw_bottle: 'bottle.png',
                hw_eau: 'eau.png',
                hw_background: 'background.png',
                hw_character: 'character.png',
                hw_virus: 'virus.png',
                hw_carton: 'carton.png',
                hw_table: 'table.png',
                hw_gestes: 'gestes.png',
                hw_okLeft: 'ok_left.png',
                hw_okRight:'ok_right.png'
            },
            AUDIOS: {
                hw_splash: 'splash.ogg',
                sound_ambiance_interior: 'sound_ambiance_interior.ogg',
                win: 'win.mp3',
                loose: 'loose.mp3'
            }
        },
        SHOPPING: {
            IMAGES: {
                tiles : 'tiles.png',
                rayon: 'rayon.png',
                caisse: 'caisse.png',
                fruit: 'fruit.png',
                sol: 'sol.jpg',
                image1: 'banane.png',
                image2: 'carotte.png',
                image3: 'pain.png',
                image4: 'poireau.png',
                image5: 'tomate.png',
                fleche : 'fleche.png'
            },
            SPRITESHEETS: {
                joueur : ['Sprite-0002-Sheet2.png', 32, 32],
                joueur2 : ['sprite1.png', 32, 32],
                joueur3 : ['sprite2.png', 32, 32],
                joueur4 : ['avantDerniere.png', 32, 32],
                joueur5 : ['derniereSprite.png',32,32],
                client1 : ['client1.png', 32, 32],
                client2 : ['client2.png', 32, 32],
                client3 : ['client3.png', 32, 32],
                client4 : ['client4.png', 32, 32],
                client5 : ['client5.png', 32, 32],
                client6 : ['client6.png', 32, 32]

            },
            TILEMAPS: {
                map: 'map1.json'
            },
            AUDIOS: {
                eatDot : 'eatDot.mp3'
            }
        },
        MASK_INVADER: {
            IMAGES: {
                mask : 'mask.png',
                Mi_health1:"coeur1.png",
                Mi_health2:"coeur2.png",
                Mi_health3:"coeur3.png",
                fond : "entrance.png",
                launcherIdle : "launcheridle.png"
            },
            SPRITESHEETS: {
                launcher : ["launcher.png", 64, 64],
                manMasked1 : ['manMasked1.png', 31, 63],
                manMasked2 : ['manMasked2.png', 31, 63],
                manMasked3 : ['manMasked3.png', 31, 63],
                manMasked4 : ['manMasked4.png', 31, 63],
                giletJaune1 : ['giletJaune1.png', 31, 63],
                giletJaune2 : ['giletJaune2.png', 31, 63],
                giletJaune3 : ['giletJaune3.png', 31, 63],
                giletJaune4 : ['giletJaune4.png', 31, 63]
            },
            AUDIOS: {
                fire : 'fire.ogg'
            }
        }
    },
    TEXTS: {
        loading : "Chargement ... ",
        loading_finish : "Chargement termin?? !",
        click_here_to_continue : "CLIQUEZ ICI POUR CONTINUER",
        skip : "PASSER",
        intro_dialogue : "Bienvenue aventurier,\nvotre mission du jour peut para??tre simple, mais elle est d???une importance capitale et tr??s difficile.\nSi vous vous en sentez capable, vous devrez aller faire vos courses en France en 2021.\nLa difficult?? me direz-vous ?\nVous affrontez aujourd???hui un ennemi invisible mais bel et bien existant : Le COVID.\n\nRevenez avec de quoi nourrir votre foyer pour la semaine en faisant attention ?? ne pas vous faire contaminer.\n\nPour cela, respectez les gestes barri??res ?? la lettre et tout ira bien.",
        hand_washer_intro : "Nous y voil??,\nl'entr??e du Ka Rouf est devant.\n\nPas de pr??cipitation, avant d???entrer, veuillez ?? bien vous nettoyer les mains avec le gel mis ?? disposition.\n\nNe laissez aucune trace et vous pourrez entrer dans le magasin !",
        hand_washer_help : "Utilisez [Q] et [D] pour d??placer le gel hydroalcoolique et utilisez [Z] pour ??liminer l'ensemble des virus sur vos mains.\nAttention, vous avez une quantit?? limit??e de gel hydroalcoolique !",
        hand_washer_loose:  "Vous avez perdu, car il ne vous reste plus de gel hydroalcoolique. Retentez votre chance !",
        hand_washer_end: "Bravo, vos mains sont impeccables !\nNous voil?? dans le gros de la mission : les courses.",
        shopping_intro: "Utilisez [Z] [Q] [S] [D] pour prendre tous les ingr??dients dans le magasin et rendez-vous en caisse. Petite pr??cision, vous n?????tes pas seul dans le magasin. Attention ?? ne pas rentrer en contact avec les autres clients, ce sont de potentiels h??tes du COVID !",
        shopping_loose: "Vous avez perdu, car vous avez ??t?? en contact avec un client. Retentez votre chance !",
        shopping_end: "Comme un grand philosophe a dit : ???J???adore quand un plan se d??roule sans accroc.???. F??licitations cher aventurier, vous avez compl??t?? la mission avec brio.\nVous avez ??t?? irr??prochable tout au long de vos courses et ??? ??? ???",
        mask_invader_intro: "ATTENTION !\nUn groupe de gilets jaunes anti-masques va s???introduire dans l???enceinte du magasin !\nUtilisez le clic de votre souris pour tirer avec votre canon ?? masque portatif.\n\nVous devez imp??rativement masquer tous les manifestants avant qu???ils ne s???approchent de vous ou des autres clients !\n?? vos cannons !\nFEEEEEUUUUU !!!!",
        mask_invader_loose: "Vous avez perdu, car deux gilets jaunes ont r??ussi ?? passer sans masques. Retentez votre chance !",
        mask_invader_end: "C'??tait moins une soldat !",
        outro_dialogue: "Vos comp??tences ont ??t?? remarquables !\nQuelle performance !\nMaintenant, retour ?? la maison avant le couvre-feu !"
    }
}
