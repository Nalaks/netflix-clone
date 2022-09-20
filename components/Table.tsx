import type { NextPage } from 'next'

const Table: NextPage = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Monthly price</td>
          <td className='table-data'>$13</td>
          <td className='table-data'>$16</td>
          <td className='table-data'>$19</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
