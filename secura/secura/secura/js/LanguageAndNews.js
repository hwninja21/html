        var tags = document.querySelectorAll(".transl");
        
        var newsTopGer = ["newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1","newsGer2newsGer2newsGer2newsGer2newsGer2newsGer2newsGer2","newsGer3newsGer3newsGer3newsGer3newsGer3newsGer3newsGer3"];
        var newsTopEng = ["newsEng1","newsEng2","newsEng3"];
        var newsBotGer = ["newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1newsGer1","newsGer2newsGer2newsGer2newsGer2newsGer2newsGer2newsGer2","newsGer3newsGer3newsGer3newsGer3newsGer3newsGer3newsGer3"];
        var newsBotEng = ["newsEng1","newsEng2","newsEng3"];
        
        var newsTop = newsTopGer;
        var newsBot = newsBotGer;
        var newsCount = 0;

        document.getElementById("newsTop").innerHTML = newsTopGer[newsCount];
        document.getElementById("newsBot").innerHTML = newsBotGer[newsCount];

        var lanuguage = 
        {
            eng:
            {
                homeButton:"Home",
                aboutUsButton:"About us",
                servicesButton:"Services",
                newsButton:"News",
                contactsButton:"Contact",
                homeButtonSide:"Home",
                aboutUsButtonSide:"About us",
                servicesButtonSide:"Services",
                newsButtonSide:"News",
                contactsButtonSide:"Contact",
                aboutUsTitle:"About us",
                portraitTop:"Secura Treuhand AG is licensed by the Liechtenstein Financial Market Authority.",
                portraitBot:"Secura Treuhand AG goes back to the Swiss Secura Treuhand- und Revisionsgesellschaft, founded in 1934. This provides decades of experience and expertise in cross-border challenges for high net worth individuals and in the management of foundations and companies. ",
                servicesTitel :"Services",
                servicesText:"Secura Treuhand AG will put you as a customer at the focus of the services. Holistic, personal advice and actions for the customer’s benefit are our priority. Secura Treuhand AG offers the following services:",
                service1:"Set Up of Foundations, Establishments, Companies and Trusts",
                service2:"Administration of Foundations, Establishments, Companies and Trusts",
                service3:"Financial Consulting",
                service4:"Business Consulting",
                service5:"Tax Advice",
                service6:"Accounting and Review",
                ContactTitel:"Contact",
                ContactHeader:"If you are looking for a consulting partner who supports you energetically, competently and reliably in the implementation of your projects and the management of your structures, you should contact us in any case. We are here for you and look forward to hearing from you.",
                formFname: "First name*",
                formLname:"Last name",
                formEmail:"E-Mail*",
                formMessage:"Message",
                formSubmitbutton:"Send" ,
                Johannes:"Manager",
                Martin:"Member of the Board of Directors",
                Domenic:"Member of the Board of Directors"
            },

            ger:
            {
                homeButton:"Home",
                aboutUsButton:"Über uns",
                servicesButton:"Dienstleistungen",
                newsButton:"News",
                contactsButton:"Kontakt",
                homeButtonSide:"Home",
                aboutUsButtonSide:"Über uns",
                servicesButtonSide:"Dienstleistungen",
                newsButtonSide:"News",
                contactsButtonSide:"Kontakt",
                aboutUsTitle:"Über uns",
                portraitTop:"Secura Treuhand AG ist ein von der Liechtensteinischen Finanzmarktaufsichtsbehörde konzessioniertes Treuhandunternehmen.",
                portraitBot:"Die Secura Treuhand AG geht auf die Schweizer Secura Treuhand- und Revisionsgesellschaft, gegründet im Jahr 1934, zurück. Damit besteht eine jahrzehntelange Erfahrung und Expertise in grenzüberschreitenden Fragestellungen für vermögende Privatpersonen und bei der Betreuung von Stiftungs-, und Verwaltungsratsmandaten.",
                servicesTitel:"Dienstleistungen",
                servicesText:"Secura Treuhand AG wird Sie als Kunde in den Mittelpunkt der Dienstleistungen stellen. Ganzheitliche, persönliche Beratung und ausschließliches Handeln im Interesse des Kunden stehen im Vordergrund.Die Secura Treuhand AG bietet folgende Dienstleistungen an:",
                service1:"Gründung von Stiftungen, Anstalten, Gesellschaften und Trusts",
                service2:"Verwaltung von Stiftungen, Anstalten, Gesellschaften und Trusts",
                service3:"Finanzberatung",
                service4:"Wirtschaftsberatung",
                service5:"Steuerberatung",
                service6:"Buchführung und Review",
                ContactTitel:"Kontakt",
                ContactHeader:"Wenn Sie einen Beratungs-Partner suchen, der Sie tatkräftig, kompetent und zuverlässig bei der Umsetzung Ihrer Projekte und Verwaltung Ihrer Strukturen unterstützt, sollten Sie sich in jedem Fall mit uns in Verbindung setzen. Wir sind für Sie da und freuen uns auf Ihre Kontaktaufnahme.",
                formFname: "Ihr Vorname*",
                formLname:"Ihr Nachname",
                formEmail:"E-Mail Adresse*",
                formMessage:"Nachricht",
                formSubmitbutton:"Senden" ,
                Johannes:"Geschäftsführer",
                Martin:"Mitglied des Verwaltungsrates",
                Domenic:"Mitglied des Verwaltungsrates"

            }
        };
toGer();




        
        function toEng()
        {
            newsTop = newsTopEng;
            newsBot = newsBotEng;
            setNews();

            for(i = 0; i < tags.length; i++)
            {
                if(tags[i].classList.contains("fromTransl"))
                {
                    document.getElementById(tags[i].id).placeholder = lanuguage.eng[tags[i].id];
                }
                else if(tags[i].classList.contains("submitTransl"))
                {
                    document.getElementById(tags[i].id).value = lanuguage.eng[tags[i].id];
                }
                else
                {
                    document.getElementById(tags[i].id).innerHTML = lanuguage.eng[tags[i].id];
                }
            }
            

        }

        function toGer()
        {
            newsTop = newsTopGer;
            newsBot = newsBotGer;
            setNews();
            
            for(i = 0; i < tags.length; i++)
            {
                if(tags[i].classList.contains("fromTransl"))
                {
                    document.getElementById(tags[i].id).placeholder = lanuguage.ger[tags[i].id];
                }
                else if(tags[i].classList.contains("submitTransl"))
                {
                    document.getElementById(tags[i].id).value = lanuguage.ger[tags[i].id];
                }
                else
                {
                    document.getElementById(tags[i].id).innerHTML = lanuguage.ger[tags[i].id];
                }
            }
        }

        function newsNext()
        {
            if(newsCount < newsTop.length -1)
            {
                newsCount += 1;
            }
            else
            {
                newsCount = 0;
            }

            document.getElementById("newsTop").innerHTML = newsTop[newsCount];
            document.getElementById("newsBot").innerHTML = newsBot[newsCount];
        }

        function newsBack()
        {
            if(newsCount == 0)
            {
                newsCount = newsTop.length - 1;
            }
            else
            {
                newsCount -= 1;
            }

            document.getElementById("newsTop").innerHTML = newsTop[newsCount];
            document.getElementById("newsBot").innerHTML = newsBot[newsCount];
        }

        function setNews()
        {
            document.getElementById("newsTop").innerHTML = newsTop[newsCount];
            document.getElementById("newsBot").innerHTML = newsBot[newsCount];
        }