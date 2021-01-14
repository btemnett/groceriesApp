import { connect } from "react-redux"
import { IAppState } from "../state/IAppState"
import * as listActions from '../actions/ListActions'

const renderList = (list: Array<string>) => {
    console.log("hey")
    return list.map((item:string) => {
        return (
            <div>
                {item}
            </div>
        )
    })
}

export const ListScreen = (props: {
    testReduxString: string,
    updateTestReduxString: any,
    list: Array<string>
}) => {
    props.updateTestReduxString("Hello there brother")

    return (
        <div>
            {props.testReduxString}
            {renderList(props.list)}
        </div>
    )
}

const mapStateToProps = (state: IAppState)=> ({
    testReduxString: state.list.testReduxString,
    list: state.list.list
})

const mapDispatchToProps = {
    updateTestReduxString: listActions.updateTestReduxString
}

export const ListScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen)