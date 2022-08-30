export const PetSearching = ({ setterFunction }) => {
    return (

        <div>
            <input
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Enter pet name" />
        </div>

    )
}
