import Heart from '../../../public/Themes/Aurora/icons/Heart.svg';
import Camera from '../../../public/Themes/Aurora/icons/camera-purple.svg';
import ClipBoard from '../../../public/Themes/Aurora/icons/clipboard-text.svg';
import Mind from '../../../public/Themes/Aurora/icons/Mind-icon.svg';
import Micro from '../../../public/Themes/Aurora/icons/Microbiome.svg';
import Blood from '../../../public/Themes/Aurora/icons/Blood-age.svg';
import ArtBoard from '../../../public/Themes/Aurora/icons/Artboard.svg';
import Dna from '../../../public/Themes/Aurora/icons/Dna.svg';

export const BiologicalCardInfo = [
    {
        icon:Camera,
        title: 'Photo Aging ',
        MAE: '2-5 years',
        otherStyles : 'top-0'
    },
    {
        icon:Heart,
        title: 'ECG Age ',
        MAE: '6-7 years',
        otherStyles : 'top-12'
    },
    {
        icon:ClipBoard,
        title: 'Anamnesis Aging',
        MAE: '6-7 years',
        otherStyles : 'top-0'
    },
    {
        icon:Mind,
        title: 'Mind Age',
        MAE: '7-8 years',
        otherStyles : 'top-12'
    }
 ]
 export const MolecularCardInfo = [
    {
        icon:Micro,
        title:  'Microbiome Aging',
        MAE: '3-10 years',
        otherStyles : 'top-0'
    },
    {
        icon:Blood,
        title:  'Blood Age',
        MAE: '5-8 years',
        otherStyles : 'top-12'
    },
    {
        icon:ArtBoard,
        title:  'Transcriptome Aging',
        MAE: '3-6 years',
        otherStyles : 'top-0'
    },
    {
        icon:Dna,
        title:  'DeepM Age',
        MAE: '2-4 years',
        otherStyles : 'top-12'
    },
 ]
 export const TabsInfo = [
    {
        text: 'All',
        path : '',
    },
    {
        text: 'Genomics',
        path : '',
        number: 4,
    },
    {
        text: 'Epigenomics',
        path : '',
        number: 0
    },
    {
        text : 'Proteomics',
        path : '',
        number : 1
    },
    {
        text: 'Metabolomics',
        path : '',
        number: 2,
    },
    {
        text: 'Microbiomics' ,
        path : '',
        number: 1
    }
 ]