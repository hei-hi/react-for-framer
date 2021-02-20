export default () => {
    const shout = (message) => {
        window.alert(message)
        return true
    }

    return <div onClick={() => shout('hihihi')}>
        hello!
    </div>
}
