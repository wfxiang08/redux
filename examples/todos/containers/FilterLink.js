import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  // 将全局的状态转换成为当前空间的props
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // 利用当前空间的props做一些action相关的事情，然后由: connect 提供: dispatch
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// connect如何工作呢?
// 包装Link? 然后呢?
//
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
