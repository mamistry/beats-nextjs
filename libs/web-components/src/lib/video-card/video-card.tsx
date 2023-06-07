import { styled } from '@mui/system';
import { Card, CardActionArea, CardContent } from '@mui/material';
import Image from 'next/image';

const CardComp = styled(Card)({
  display: 'inline-block',
  margin: '3%',
  padding: '.4%',
  height: '250px',
  width: '250px',
  transition: 'all .3s ease-out',
});

const ImageComp = styled('div')({
  height: '100%',
  width: '100%',
});

export type AssetProps = {
  img: string;
};

export const VideoCard = ({ img }: AssetProps) => {
  return (
    <CardComp>
      <CardActionArea component="a">
        <CardContent>
          <ImageComp>
            <img src={img} alt="helps" height={250} width={250} />
          </ImageComp>
        </CardContent>
      </CardActionArea>
    </CardComp>
  );
};
