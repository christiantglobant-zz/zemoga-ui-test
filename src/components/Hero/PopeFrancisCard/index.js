import React from "react";

import PopeFrancisInfoCard from "./styles/PopeFrancisInfoCard";
import PopeFrancisMoreInfo from "./styles/PopeFrancisMoreInfo";
import PopeFrancisCardContainer from "./styles/PopeFrancisCardContainer";
import PopeFrancisCardDescription from "./styles/PopeFrancisCardDescription";

import Image from "../../Image";
import Button from "../../Button";
import FontBold from "../../FontBold";

import likeIcon from "../../../assets/svg/like_icon.svg";
import dislikeIcon from "../../../assets/svg/dislike_icon.svg";
import wikiIcon from "../../../assets/svg/wiki_icon.svg";

const PopeFrancisCard = () => (
  <PopeFrancisCardContainer>
    <PopeFrancisInfoCard>
      What’s your opinion on
      <FontBold> Pope Francis?</FontBold>
      <PopeFrancisCardDescription>
        He’s talking tough on clergy sexual abuse, but is he just another papal
        pervert protector? (thumbs down) or a true pedophile punishing pontiff?
        (thumbs up)
      </PopeFrancisCardDescription>
      <PopeFrancisMoreInfo>
        <Image width="1.2rem" src={wikiIcon} />
        More information
      </PopeFrancisMoreInfo>
      <FontBold> What’s Your Verdict?</FontBold>
    </PopeFrancisInfoCard>
    <Button disabled buttonStyle="primary">
      <Image src={likeIcon} />
    </Button>
    <Button disabled buttonStyle="secondary">
      <Image src={dislikeIcon} />
    </Button>
  </PopeFrancisCardContainer>
);

export default PopeFrancisCard;
