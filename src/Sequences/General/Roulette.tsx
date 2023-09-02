type Props = {
    listWords: Array<string>;
    currentWordIndex: number;
    numberWord: 2 | 3;
};

const Roulette: React.FC<Props> = ({ listWords, currentWordIndex, numberWord }: Props) => {
    console.log(listWords, currentWordIndex, numberWord);
    
    return (
        <>
            
        </>
    )
}

export default Roulette;