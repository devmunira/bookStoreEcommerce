const { useState } = require("react")

export const useIsLoading = () => {
    const [isLoading , setIsLoading] = useState(true)
    return {
        isLoading,
        setIsLoading
    }
}