import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import "firebase/firestore";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import TutorialCard from "../components/TutorialCardBrew";

const TutorialsBrewDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  justify-content: space-around;
  width: 50%;
  min-height: 560px;
  /* background-color: #e5e5e5; */
`;

const CardListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin: 15px;
  a:visited {
    color: #000000;
  }
`;

const CardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  width: ${(props) => props.width};
`;

const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const CardListH4 = styled.h4`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: ${(props) => props.marginbottom};
`;

const CardListText = styled.p`
  margin: 20px 0 24px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TutorialsD02 = () => {
  return (
    <>
      <TutorialsBrewDiv>
        <CardListDiv>
          <CardListH3>WOMEN IN THE COFFEE INDUSTRY</CardListH3>
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/amp_4-2.jpg?v=1583433815"
            }
          />
          <CardListText>
            We would guess that a large portion of coffee drinkers might think
            operations are overseen by large estates equipped with the most
            robust mills and modern technology. But did you know that 70% of the
            world’s coffee producers can be characterized as “smallholder”
            farmers? It’s a stunning majority of the coffee industry.
            Smallholder farmers traditionally grow a mixture of cash and
            subsistence crops, which rarely exceed 5 hectares. A more important
            factor often overlooked is the role women have in our industry.
            While the numbers vary from study to study, some reports estimate
            that women make up 70% of the labor force on coffee farms; planting,
            processing, picking and sorting. Women are the hidden heroines of
            the coffee industry. They have a much lower representation when it
            comes to land ownership with estimates range from as little as 5% to
            higher estimates of 20% in coffee-growing countries. Amparo Maya
            Guerrero is one of the many smallholder farmers worldwide, with her
            plot clocking in at 3 hectares. We touched down in Colombia to pay a
            special visit to a truly memorable woman and her farm in Chachagüí.
            When it was time to wrap and head back home, we all walked away
            buzzing with inspiration from her words of wisdom and excited to
            share our experience and her story with you all.
          </CardListText>
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/amp_2-2.jpg?v=1583433885"
            }
          />
          <CardListText>
            Amparo’s farm, El Convento, grows avocados and citrus fruits
            alongside the beautiful rows of coffee trees. The combination of
            high altitude and moderate temperatures slow the rate of maturation
            but reward her cherries with heightened sweetness. Her signature
            sweet coffee awarded her first place in the Cup of Excellence in
            2004 and again in 2008. The bright acidity in this single-origin
            espresso met with nectarine sweetness continues to blow us away
            every time we taste it. Amparo’s peaceful energy permeates the
            surrounding space and her commitment to and connection with the land
            is a palatable force. Her dedication and guiding principles are
            reflected in her coffee.
          </CardListText>

          <CardListH4 marginbottom={"20px"} style={{ fontStytle: "italic" }}>
            “It begins with the earth. In the earth is where we begin and we
            have to make the connection with the earth. We have to see it, feel
            it, and listen to it to find what it tells you. There is so much to
            learn behind the coffee: I take a sip from this coffee and 'Wow, I
            need to share it.”
          </CardListH4>

          <CardListH4>Q: What has growing coffee taught you?</CardListH4>

          <CardListText>
            A: I have been farming coffee for 35 years. I really didn't know
            anything about coffee. It begins with the earth. In the earth is
            where we begin and we have to make the connection with the earth. We
            have to recognize that the earth is where the coffee starts and
            finds its significance. We have to see it, feel it, and listen to it
            to find what it tells you. There is so much to learn behind the
            coffee: there is an individual, a collective, social and a
            psychological component in coffee. Once you get all of the
            components, that is when the coffee becomes important, significant,
            valuable. In the fields, we have to learn to give respect and value
            to all of the things in the land. I take a sip from this coffee and
            ‘Wow, I need to share it.’ The personal aspect is that I have had to
            overcome a lot of things. First, the unknown from the field. Toxic
            masculinity is a big thing in the fields that I have had to deal
            with. I have had to fight hard in respect to this. I don't have
            anything against men; I treasure them and I do not think there is
            anything different between us. They are as strong and beautiful as a
            woman. Sometimes in the field when a woman feels tired, it is
            frowned upon. Men feel the same way: however, they do not show it.
          </CardListText>
          <CardListH3>
            "When the whole world tells you that you can't, you begin to believe
            that you can't. But there is a moment where you have a glimmer of
            belief inside yourself that says 'you can' that you have to hold on
            to. Anything you have in your mind you can create. Everything in our
            mind is able to be unraveled and actualized."{" "}
          </CardListH3>

          <CardListH4>Q: How has coffee impacted your life?</CardListH4>

          <CardListText>
            A: Before I started farming coffee 35 years ago, I really didn't
            know anything about it. You cannot sit back and dwell on your
            misfortune. There is a learning in all of it. What is interesting
            about human beings is our ability to move beyond our problems. The
            problems we have encountered are infinite. At the end of the day,
            all your problems are nothing more than a silly scare. Behind the
            problem lies your fear. The problem is our opportunity to overcome
            the difficulties in the world. People die from fear.
          </CardListText>
          <CardListH4>
            Q: What makes your connection with coffee so unique?
          </CardListH4>
          <CardListText>
            A: Coffee is a cultivar and apart from the highs and lows that is
            has and that it is not the easiest to manage. When I started in
            coffee, it felt impossible to make a difference. The biggest
            challenge is fighting your own ignorance. Second, you have to fight
            the outside voices that say you can't. You have to generate
            something unique, to be true to yourself and to serve those around
            you. It presents an amazing opportunity and we want to provide an
            incredible product. It's a perfect opportunity to share and
            communicate with the world through the end product.
          </CardListText>
          <CardListH3>
            "You are the one behind the coffee cup. You are the essence, you are
            the one drinking it. My desire to give the world something good."
          </CardListH3>
          <CardListText>
            A: Coffee is a cultivar and apart from the highs and lows that is
            has and that it is not the easiest to manage. When I started in
            coffee, it felt impossible to make a difference. The biggest
            challenge is fighting your own ignorance. Second, you have to fight
            the outside voices that say you can't. You have to generate
            something unique, to be true to yourself and to serve those around
            you. It presents an amazing opportunity and we want to provide an
            incredible product. It's a perfect opportunity to share and
            communicate with the world through the end product.
          </CardListText>

          <CardListText>
            It is my opportunity to share my work with the people. It's an equal
            exchange between the drinker and me. You are drinking the final
            product of 35 years of work. You are drinking my strength and my
            love for life. It is my opportunity to share my work with the
            people. It's an equal exchange between the drinker and me.
          </CardListText>
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/amp_3-2.jpg?v=1583434819"
            }
          />

          <CardListH4>Q: Do you have any plans for the future?</CardListH4>
          <CardListText>
            A: I want to finish planting the farm. There is one more section to
            complete. But more importantly, my mission is to feed the people in
            Colombia. There are many that are suffering from hunger. I want to
            build an empire that creates a viable livelihood for me and for the
            people who work here. It is hard to raise the price of the coffee
            with the current coffee price crisis. There is always a speculative
            market that hurts us and does not have a conscience. There is a
            population that only wants money and that is a challenge; capitalism
            is such an intense force. It's a part of the unconscious of the
            world. But I know in my heart that we are all the same and we are
            all searching for the opportunity to unravel ourselves.
          </CardListText>

          <CardListText>
            Gender inequality is an issue all industries are facing, not just
            the coffee industry. Consumers are becoming more aware of the
            disparities throughout the supply chain. Verve Coffee Roasters
            supports each hand involved in the coffee journey. From seed to cup,
            we’re committed to positively impacting our local and global coffee
            community. By connecting the people who love to drink Verve with the
            coffee producer, we’re creating an open line of communication that
            transcends language, culture, and distance. Farmers, roasters, and
            baristas all play an integral role in crafting the cup. We’re
            connecting the farmers at Farmlevel with you at Streetlevel. We
            believe this initiative is vital to the future of coffee. It brings
            much-needed attention to the coffee farmers, spotlighting their
            knowledge, dedication, and love of coffee. Verve understands the
            intense effort and commitment necessary to produce quality coffee.
            Direct trade relationships allow you to experience the most
            incredible coffees in the world while knowing that you’ve positively
            impacted global communities with every sip.
          </CardListText>
          <CardListText>
            The stories from Farmlevel are always pushing us forward so we can
            continue to discover the next best coffees on earth. “If you can
            accept the weight of the unknown, have the stamina to always play
            through, believe in the purpose of the job and changing the world,
            and are the type of person drawn to knowing what’s just over the
            next ridge, then this job might just be for you,” says co-founder
            and veteran coffee buyer Colby Barr. Stay tuned for another
            Farmlevel adventure.
          </CardListText>
          <CardListImg
            src={
              "https://cdn.shopify.com/s/files/1/0035/9372/files/Farmlevel-Colombia-AmparoMaya-5919_1.jpg?v=1583435180"
            }
          />
        </CardListDiv>
      </TutorialsBrewDiv>
    </>
  );
};

export default TutorialsD02;
