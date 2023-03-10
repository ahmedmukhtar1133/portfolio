import { getTotalCharCode } from '@/utils/utils';
import { Stack, Tag, TagLeftIcon, TagLabel, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMongodb, SiStrapi, SiNextDotJs, SiElectron, SiMaterialUi, SiPostgresql } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

const tagDict = {
    React: FaReact,
    Node: IoLogoNodejs,
    'Chakra-UI': BsFillLightningFill,
    'Express': FaNodeJs,
    'MongoDB': SiMongodb,
    'Rest': SiStrapi,
    'TMDB Api': SiStrapi,
    'Next': SiNextDotJs,
    'ElectronJS': SiElectron,
    'MaterialUI': SiMaterialUi,
    'Laravel': FaLaravel,
    'Postgres': SiPostgresql,
    'H5P': DiJavascript,
};

const Tags = ({ tags }) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    return (
        <Stack height='25px' isInline>
            {tags?.map(tag => (
                <Tag
                    key={tag}
                    colorScheme={`${['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
                        getTotalCharCode(tag) % 10
                        ]
                        }`}
                    size={isLargerThan800 ? 'md' : 'sm'}
                >
                    <TagLeftIcon marginInlineEnd={'6px'} as={tagDict[tag]}></TagLeftIcon>
                    <TagLabel fontWeight={'600'}>{tag}</TagLabel>
                </Tag>
            ))}
        </Stack>
    );
};

export default Tags;
